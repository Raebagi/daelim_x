import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
import Home from './screens/home';
import SigninScreen from './screens/signin-screen';
import SignupScreen from './screens/signup-screen';
import Profile from './screens/profile';

// react-router-dom을 활용한 Page 관리
// - Page : home, profile, SignUp, SignIn

const router = createBrowserRouter([{
  path : "/",
  children : [
    {
      path : "",
      element : <Home/>
    },{
      path : "profile",
      element : <Profile/>
    }
  ]
},{
    path : "/signin",
    element : <SigninScreen/>
  },
  {
    path : "/signup",
    element : <SignupScreen/>
  }
]);

const Container = styled.div`
background-color: black;
width: 100vm;
height: 100vh;
`;

function App() {
  return (
    <Container className="App">
      <RouterProvider router={router}></RouterProvider>
    </Container>
  );
}

export default App;
