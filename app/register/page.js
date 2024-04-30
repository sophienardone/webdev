import Link from 'next/link'; // Import Link from next/link


function Register(){

    return (
        <>
          <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            <form className="block max-w-sm mx-auto">
              <label htmlFor='name'><strong>Name</strong></label>
              <input type="text" placeholder='Enter name' name="name" /><br />
             
              <input type="email" placeholder="email" name="email"  required /><br />
             
              <input type="password" placeholder="password" name="password"  /><br />
              
              <button type="submit">Register</button>
              
              <Link href="/">Back to Login</Link>
            </form>
          </section>
        </>
      );
    }
    
    export default Register;








