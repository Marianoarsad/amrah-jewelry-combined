import Logo from "/amrah-logo.png";
import TextLogo from "/amrah-logo-text.png";

export default function AdminLogin ({}) {
    
    return (
        <>
            <div id="login">
                <div className="company-logo-container">
                    <img
                        className="icon-logo" 
                        src={Logo} 
                        alt="amrah-logo"
                    />
                    <img 
                        className="text-logo"
                        src={TextLogo} 
                        alt="amrah-text-logo"
                    />
                </div>
                <div className="vertical-line"></div>
                <form id="admin-login-form">
                    <h3>Welcome</h3>
                    <p>Please login to admin dashboard</p>
                    <label>Email</label>
                    <input />
                    <label>Password</label>
                    <input />
                    <button>LOGIN</button>
                    <a href="#">Forgot your password?</a>
                </form>
            </div>
        </>
    )
}