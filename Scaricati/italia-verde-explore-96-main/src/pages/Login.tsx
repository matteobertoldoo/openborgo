import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { X, Mail, Lock } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - would connect to authentication in real app
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to home or previous page
      window.location.href = '/';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-italia-beige">
      <header className="py-4 px-4 border-b bg-background">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl font-playfair font-bold">openborgo</Link>
          <Link to="/">
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-playfair font-bold mb-2">Sign in or create an account</h1>
          <p className="text-muted-foreground mb-6">
            Unlock a world of rural Italian experiences with one account
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <Button 
                className="w-full bg-italia-sage hover:bg-italia-sage/90" 
                disabled={isLoading}
                type="submit"
              >
                {isLoading ? 'Signing in...' : 'Continue'}
              </Button>
            </div>
          </form>
          
          <div className="relative my-6">
            <Separator />
            <span className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-2 bg-white text-muted-foreground text-sm">
              or
            </span>
          </div>
          
          <div className="space-y-3">
            <Button 
              variant="outline" 
              className="w-full"
              type="button"
            >
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" className="h-5 w-5 mr-2" />
              Sign in with Google
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              type="button"
            >
              <svg className="h-5 w-5 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
              Sign in with Apple
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full"
              type="button"
            >
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>
              </svg>
              Sign in with Facebook
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 text-center mt-4">
            By continuing, you agree to the Openborgo Terms and Conditions and Privacy Statement.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
