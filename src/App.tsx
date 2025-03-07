import {Route, Routes, createBrowserRouter, RouterProvider} from "react-router";
import {styled} from "styled-components";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Mains/Home";
import AboutMe  from "./components/Mains/AboutMe";
import Projects from "./components/Mains/Projects";
import Skills  from "./components/Mains/Skills";
import Experience  from "./components/Mains/Experience";
import ContactMe  from "./components/Mains/ContactMe";


const PageWrapper = styled.div`
    width: 80vw;
    margin: 0 auto;
`

const Container = styled.div`
    background: #232426;
    border: 0.3vw solid #343538;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: 900px) {
        width: 100%;
        height: 100vh;
        flex-direction: column;    }
    
`


function Root (){
  return (
      <PageWrapper>
          <Header/>
          <Container>
              <Nav />
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/projects" element={<Projects />}/>
                  <Route path="/about-me" element={<AboutMe />}/>
                  <Route path="/skills" element={<Skills />}/>
                  <Route path="/experience" element={<Experience />}/>
                  <Route path="/contact-me" element={<ContactMe />}/>
              </Routes>
          </Container>
          <Footer/>

      </PageWrapper>
  )

}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

export default function App() {
    return (<RouterProvider router={router} />)
}
