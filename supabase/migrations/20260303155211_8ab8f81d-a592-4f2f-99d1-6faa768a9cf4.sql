
-- 1. Add email format validation trigger
CREATE OR REPLACE FUNCTION public.validate_demo_email()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.email !~* '^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  IF length(NEW.email) > 255 THEN
    RAISE EXCEPTION 'Email too long';
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER check_demo_email_format
BEFORE INSERT OR UPDATE ON public.demo_emails
FOR EACH ROW EXECUTE FUNCTION public.validate_demo_email();

-- 2. Drop the overly permissive INSERT policy and replace with a restrictive one
DROP POLICY IF EXISTS "Anyone can insert demo emails" ON public.demo_emails;

CREATE POLICY "Anon can insert demo emails"
ON public.demo_emails
FOR INSERT
TO anon
WITH CHECK (true);

-- 3. Tighten SELECT policy to authenticated only
DROP POLICY IF EXISTS "Authenticated users can read demo emails" ON public.demo_emails;

CREATE POLICY "Authenticated users can read demo emails"
ON public.demo_emails
FOR SELECT
TO authenticated
USING (true);
