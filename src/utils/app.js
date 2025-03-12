import { useState, useEffect } from "react";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { Router, Route } from "react-router-dom";
// import Signup from "./pages/signup";
import awsAmplifyConfig from "./utils/aws-amplify-config";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
// import {configureAuth} from "./utils/auth";
import {
  signUp,
  confirmSignUp,
  signIn,
  fetchAuthSession,
} from "aws-amplify/auth";
import { jwtDecode } from "jwt-decode";
Amplify.configure(awsAmplifyConfig);

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isSignupCompleted, setIsSignupCompleted] = useState(false);

  async function handleSignIn() {
    try {
      const { isSignedIn, nextStep } = await signIn({
        username: username.trim(),
        password: password.trim(),
      });

      console.log("signin", nextStep, isSignedIn);
    } catch (error) {
      console.log("error signing in", error);
    }
  }

  const register = async (username, password) => {
    try {
      const { user } = await signUp({
        username: username.trim(),
        password: password.trim(),
        options: {
          userAttributes: {
            email: username.trim(),
            name: "Sant Shukla",
            given_name: "Sant",
            family_name: "Shukla",
          },
          autoSignIn: false,
        },
      });
      // console.log("user", user);
      // if (user) {
      setIsCodeSent(true);
      // }
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  async function handleSignUpConfirmation({ username, confirmationCode }) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username: "grasaddadduffei-6794@yopmail.com",
        confirmationCode: "730454",
      });
      console.log("is signup completed", isSignUpComplete, nextStep);
    } catch (error) {
      console.log("error confirming sign up", error);
    }
  }

  useEffect(() => {
    // Check for an existing Google client initialization
    if (!window.google?.accounts) createScript();
  }, []);

  // Load the Google client
  const createScript = () => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initGsi;
    document.body.appendChild(script);
  };

  // Initialize Google client and render Google button
  const initGsi = async () => {
    if (window.google?.accounts) {
      window.google.accounts.id.initialize({
        client_id:
          "987467801506-21c8ruf6r9ebnu3ne4napet4ch4meo7g.apps.googleusercontent.com",
        callback: async (response) => {
          let token = jwtDecode(response.credential);
          console.log("fetchSessionResult: ", token);
        },
      });
      window.google.accounts.id.renderButton(
        document.getElementById("googleSignInButton"),
        { theme: "outline", size: "large" }
      );
    }
  };

  return (
    <>
      {isCodeSent ? (
        <>
          <input
            type="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />

          <button onClick={() => handleSignUpConfirmation(username, code)}>
            verify
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={() => handleSignIn()}>signup</button>
        </>
      )}
      {/* <Authenticator>
       {({ signOut, user }) => (

        <main>
          {console.log("user", user)}
          <h1>Hello {user?.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
          </Authenticator> */}
      {/* <div>
        <button id="googleSignInButton" />
      </div> */}
    </>
  );
}

export default App;
