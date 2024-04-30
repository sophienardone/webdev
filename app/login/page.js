import Link from 'next/link';

function LoginPage(){
    return (
        <>
          <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
            <form className="block max-w-sm mx-auto">
              <input type="email" placeholder="email" name="email" required /><br />
            
              <input type="password" placeholder="password" name="password"  /><br />
              
              <button type="submit">Login</button>
              
              <Link href="/register">Create an account</Link>
            </form>
          </section>
        </>
      );
    }
    export default LoginPage;








