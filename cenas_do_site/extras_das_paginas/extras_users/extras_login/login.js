    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodnduenV5c2JsdGJiaGN1Ymp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDc0NTcsImV4cCI6MjA4MTIyMzQ1N30.4zsRoSm524_F1XQTx54ZN99q-hEXU9sBh8kT1fYd1so'
    const SUPABASE_URL = 'https://vhvwnzuysbltbbhcubjw.supabase.co';

    const { createClient } = supabase;
    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    async function login() {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      const { data, error } = await client.auth.signInWithPassword({ email, password });

      const messageDiv = document.getElementById('message');
      if (error) {
        messageDiv.textContent = error.message;
        console.error('Login error:', error);
      } else {
        messageDiv.textContent = "Nice";
        console.log('User:', data.user);
        window.location.href = 'https://ricadinho.com/';
      }
    }