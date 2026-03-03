
CREATE TABLE public.demo_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.demo_emails ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (visitors aren't logged in)
CREATE POLICY "Anyone can insert demo emails"
  ON public.demo_emails
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users (admins) can read
CREATE POLICY "Authenticated users can read demo emails"
  ON public.demo_emails
  FOR SELECT
  TO authenticated
  USING (true);
