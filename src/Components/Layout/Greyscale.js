import React from 'react'

const Greyscale = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand js-scroll-trigger" href="#page-top">HomeNow</a>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
        <i class="fas fa-bars"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link js-scroll-trigger" href="#signup">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <header class="masthead">
                <div class="d-flex flex-column h-100 align-items-center justify-content-center">
                    <div class="p-2 bd-highlight mt-auto my-0">
                        <h1>Here Now</h1>
                    </div>
                    <div class="p-2 d-inline-flex justify-content-around bd-highlight mt-auto ">

                        <h2 class="p-2 bd-highlight">one can overcome the hardest times in life by focusing on two words</h2>

                        <a href="#about" class="btn js-scroll-trigger" id="welcome-btn">HERE-NOW</a>


                    </div>
                </div>


            </header>

        </div>




    )
}

export default Greyscale
