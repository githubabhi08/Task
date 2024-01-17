import React from 'react'
import './App.css'

/* import AccordionComponent from './AccordionComponent'; */



import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap's CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap's JS


function App() {


  return (
    <>
      <section className='top'>



        {/* NAV-bAR */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <h1 className="navbar-brand" href="#">
              Abhi
            </h1>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#FEATURE">
                    Feature
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#FAQS">
                    FAQS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#PRICING">
                    pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#TESTIMONIALS">
                    Testimonials
                  </a>
                </li>
                <div>
                  <button type="button" class="btn btn-light btn-lg">Buy Templates</button>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        {/* Body toggle button */}

        <button class="btn rima" type="button">WELCOME TO MANAGE WISE!</button>

        <h1 className='one'>Empower your business with </h1>
        <h1 className='two'>Strategic insights</h1>

        <section >
          <h5 className='rima2'>Powerful management platform designed to streamline your business  </h5>
          <h5 className='rema2' >operations, boost productivity, and drive success</h5>
        </section>


        <section className='bn'>
          <button type="button" class="btn btn-primary btn-lg bt1">GET STARTED</button>
          <button type="button" class="btn btn-secondary btn-lg bt2">WATCH DEMO</button>
        </section>


        {/* banner */}

        <section className='ban'>
          <img src='https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=1024' />
        </section>



      </section>


      <button type="button" className=" tog2">Primary</button>

      <section className='str'>
        <h1>Discover our product's Capabilities</h1>
        <h3>Don't settle for mediocrity - embrace the future of management </h3>
        <h3 className='me'>with Manage Wise.</h3>
      </section>


      {/* cards 2 @ 1row */}

      <div className='row main' id='FEATURE'>


        <div className='col-md-5 ngt'>
          <div className='card'>
            <div className='card-body'>
              <div className='card-text'>
                <h1 className='chg'>Boost productivity and</h1>
                <h1 className='chg'>streamline workflow with </h1>
                <h1 className='chg'>us. Enjoy our intuitive </h1>
                <h1 className='chg'>interface and robust </h1>
                <h1 className='chg'>features.</h1>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-5 ngt2'>

          <div className="card" >
            <img src='https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=512' />

          </div>

        </div>

      </div>


      {/* cards 3 in one */}

      <div className='row nic '>
        <div className='col-md-4'>
          <img src='https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512' />
        </div>

        <div className='col-md-4 '>
          <img src='https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512' />
        </div>

        <div className='col-md-4'>
          <img src='https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512' />
        </div>
      </div>


      {/* box starts */}

      <section className='box'>
        <section className='abh'>
          <button type="button" class="btn btn-primary">AND MORE...</button>

          <div className='car'>
            <h1>Explore an array of features that elevate your </h1>
            <h1><span>Productivity</span> to new heights</h1>
          </div>


          <p>Discover the tools that will revolutionize the way you <br />
            manage and optimize your operations</p>
        </section>



        {/* cards 3 */}

        <section className='row abh2'>
          <section className='col-md-3'>
            <div className='card'>

              <div className='card-body' style={{ background: 'white' }}>
                <div className='card-title'><h4>Cross-Platform<br />
                  Compatibility</h4></div>
                <div className='card-text'>
                  <p>Enjoy the flexibility of cross-platform <br /> compatibility. Our product works<br />
                    seamlessly across desktop, web, and<br /> mobile devices, allowing you to work<br />
                    from your preferred device.</p>
                </div>
              </div>
            </div>
          </section>

          <section className='col-md-3'>
            <div className='card'>

              <div className='card-body' style={{ background: 'white' }}>
                <div className='card-title'><h4>Cross-Platform<br />
                  Compatibility</h4></div>
                <div className='card-text'>
                  <p>Enjoy the flexibility of cross-platform <br /> compatibility. Our product works<br />
                    seamlessly across desktop, web, and<br /> mobile devices, allowing you to work<br />
                    from your preferred device.</p>
                </div>
              </div>
            </div>

          </section>

          <section className='col-md-3'>
            <div className='card'>

              <div className='card-body' style={{ background: 'white' }}>
                <div className='card-title'><h4>Cross-Platform<br />
                  Compatibility</h4></div>
                <div className='card-text'>
                  <p>Enjoy the flexibility of cross-platform <br /> compatibility. Our product works<br />
                    seamlessly across desktop, web, and<br /> mobile devices, allowing you to work<br />
                    from your preferred device.</p>
                </div>
              </div>
            </div>
          </section>

        </section>

        <button type="button" class="btn btn-primary">INTREGATIONS</button>
        <h1 className='bold'> Enable integration with<br /> other popular tools and<br /> <span>platforms</span></h1>
        <h3 className='bold2'>Seamlessly connect and amplify your workflow<br /> by enabling integration with
          a diverse array of <br /><span>widely-used tools and platforms.</span></h3>

        <img src='https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024' className='rock' />




      </section>


      <section className='last box2' id='FAQS'>

        <div className='row'>
          <div className='col-md-4'>

            <div className='lft'>
              <button type="button" class="btn btn-primary">Primary</button>

              <h1>Need <br />
                Answers?</h1>


              <h4 className='ad'>
                Check out our most commonly<br /> asked questions below to find the<br />  information you need.
              </h4>
            </div>
          </div>
          <div className='col-md-8'>

            <div class="d-grid gap-2">
              <button class="btn btn-light" type="button">What is Manage Wise and What does it offer?</button>
              <button class="btn btn-light" type="button">Is Manage Wise suitable for small businesses and large enterprises alike</button>

              <button class="btn btn-light" type="button">Can i access manage Wise from different devices and platforms</button>
              <button class="btn btn-light" type="button">What kind of support options u provide to ur users</button>

              <button class="btn btn-light" type="button">How secure is data stored in manage Wise</button>
            </div>


          </div>
        </div>


        <div className='casr'>
          <button type="button" class="btn btn-outline-primary akela">Pricing</button>

          <h1>Select your ideal <span>Pricing</span> plan</h1>
          <h3>At Manage Wise, we believe in providing you with <br />
            pricing plans that adapt to your unique needs.</h3>
        </div>

      </section>


      <section className='last2' id='PRICING'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-title'>
                  <button type="button" class="btn btn-outline-primary">Free</button>
                  <div className='card-text'>
                    <div className='ab'>
                      <h5>Access to all basic features</h5>
                      <h5>Reporting and analytics</h5>
                      <h5>Up to 5 individual users</h5>
                      <h5>Chat and email support</h5>
                    </div>
                    <h3>money</h3>
                    <button type="button" class="btn btn-outline-primary abh">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-title'>
                  <button type="button" class="btn btn-outline-primary">Standard</button>

                  <div className='card-text'>
                    <div className='ab'>
                      <h5>Access to all basic features</h5>
                      <h5>Reporting and analytics</h5>
                      <h5>Up to 5 individual users</h5>
                      <h5>Chat and email support</h5>
                      <h5>3+ integrations</h5>
                    </div>
                    <h3>money</h3>
                    <button type="button" class="btn btn-outline-primary abh">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <button type="button" class="btn btn-outline-primary">Business</button>

                <div className='card-text'>
                  <div className='ab'>
                    <h5>Access to all basic features</h5>
                    <h5>Reporting and analytics</h5>
                    <h5>Up to 5 individual users</h5>
                    <h5>Chat and email support</h5>
                    <h5>3+ integrations</h5>
                  </div>
                  <h3>money</h3>
                  <button type="button" class="btn btn-outline-primary abh">Get Started</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='last3' id='TESTIMONIALS'>
        <button type="button" class="btn btn-primary">Testimonials</button>

        <h1>Hear from our <span>Satisfied</span> clients</h1>
        <h4>Discover why our clients love working with us. Read their<br />
          testimonials and learn how we has helped businesses.</h4>


        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-text'>
                  <h4>I can't imagine running my business without this product. The automation features have saved me
                    hours of manual work, allowing me to focus on strategic tasks.</h4>


                </div>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-text'>
                  <h4>
                    The customer support team behind this product is exceptional.
                    They have been incredibly responsive and helpful,
                    addressing any questions or concerns promptly
                  </h4>
                </div>
              </div>
            </div>
          </div>


          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <div className='card-text'>
                  <h4>
                    Using this product has been a <br />
                    game-changer for our team. The collaboration features <br /> and
                    intuitive interface have greatly improved  <br />our productivit
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>




    <div className='akki'>
    <div className='row'>
        <div className='col-md-12'>
          {/* <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
              <button type="button" class="btn btn-primary">Primary</button>
              <h1 className="card-title">Unleash your <span>Potential</span> <br />
                with us</h1>
              <p className="card-text">
                Join our community of ambitious individuals <br />
                and organizations eager to make a difference.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> */}
          <div className="card text-center">
  <div className="card-header"></div>
  <div className="card-body">
  <button type="button" class="btn btn-primary">Primary</button>
              <h1 className="card-title">Unleash your <span>Potential</span> <br />
                with us</h1>
    <p className="card-text">
    <p className="card-text">
                Join our community of ambitious individuals <br />
                and organizations eager to make a difference.
              </p>
    </p>
    
  </div>
  <div className="card-footer text-muted"></div>
</div>


        </div>
      </div>
    </div>


<footer className='ring'>
 <div className='sde'>
 <h5>Feature</h5>
  <h5>FAQ</h5>
  <h5>Pricing</h5>
  <h5>Testimonials</h5>
 </div>
  <div className='abs'>
    <h4>© 2023 Created By Abhi on 02-12-23.</h4>
  </div>
</footer>




    </>
  )
}

export default App




