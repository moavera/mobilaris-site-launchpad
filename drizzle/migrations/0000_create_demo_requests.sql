CREATE TABLE public.demo_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  consent BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.demo_requests TO anon;
GRANT SELECT ON public.demo_requests TO authenticated;
GRANT ALL ON public.demo_requests TO service_role;

ALTER TABLE public.demo_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anon can insert demo requests"
  ON public.demo_requests
  FOR INSERT
  TO anon
  WITH CHECK (consent = true);

CREATE POLICY "Authenticated users can read demo requests"
  ON public.demo_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE OR REPLACE FUNCTION public.validate_demo_request()
RETURNS TRIGGER AS $$
BEGIN
  IF btrim(NEW.name) = '' OR length(NEW.name) > 100 THEN
    RAISE EXCEPTION 'Invalid name';
  END IF;
  IF btrim(NEW.company) = '' OR length(NEW.company) > 120 THEN
    RAISE EXCEPTION 'Invalid company';
  END IF;
  IF NEW.email !~* '^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  IF length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email too long';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER check_demo_request_fields
BEFORE INSERT OR UPDATE ON public.demo_requests
FOR EACH ROW EXECUTE FUNCTION public.validate_demo_request();