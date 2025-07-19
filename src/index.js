console.log("hello")
import "./styles.css";


const pageTitle = document.querySelector("#pageTitle")



const homeNav = document.querySelector("#homeNav")


homeNav.addEventListener("click",() =>{
    updatePage("homeNav");
})

const menuNav = document.querySelector("#menuNav")
menuNav.addEventListener("click",() =>{
    updatePage("menuNav");
    
})

const contactNav = document.querySelector("#contactNav")
contactNav.addEventListener("click",() =>{
    updatePage("contactNav");
})

const cardContent = document.querySelector("#cardContent");

function updatePage(displayContent = "homeNav"){
    console.log(displayContent);
    if (displayContent == "homeNav") {
        pageTitle.textContent = "";
        cardContent.innerHTML = 
            `
                <div class="p-5 mb-4 bg-light rounded-3">
                    <div class="container-fluid py-5">
                        <h1 class="display-5 fw-bold">Beary's Breakfast Bar</h1>
                        <p class="col-md-8 fs-4">Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.</p>
                        <footer class="blockquote-footer">Goldilocks</footer>
                    </div>
                </div>

                <div class="row align-items-md-stretch">
                    <div class="col-md-6">
                        <div class="h-100 p-5 text-white bg-dark rounded-3">
                            <h2>Hours</h2>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>Sunday: 8am - 8pm</li>
                                <li>Monday: 8am - 6pm</li>
                                <li>Tuesday: 8am - 6pm</li>
                                <li>Wednesday: 8am - 6pm</li>
                                <li>Thursday: 6am - 10pm</li>
                                <li>Friday: 6am - 10pm</li>
                                <li>Saturday: 8am - 10pm</li>
                            </ul>
                            <button class="btn btn-outline-light" type="button">Example button</button>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="h-100 p-5 bg-light border rounded-3">
                        <h2>Location</h2>
                        <p>123 Forest Drive, Forestville, Maine</p>
                        <button class="btn btn-outline-secondary" type="button">Example button</button>
                        </div>
                    </div>
                </div>
            `
    }
    else if (displayContent == "menuNav") {
        pageTitle.textContent = "Menu";
        cardContent.innerHTML = `
            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Beverages</h4>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center" >
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Honey Tea</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!

                            </p>
                            <h1 class="card-title pricing-card-title">$2</h1>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Beary Tea</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                            A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.
                            </p>
                            <h1 class="card-title pricing-card-title">$2</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Sides</h4>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center" >
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Toast and Jam</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.
                            </p>
                            <h1 class="card-title pricing-card-title">$1</h1>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Fresh Fruit</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                            A small bowl of fresh fruit, whatever we find at the market for the day.
                            </p>
                            <h1 class="card-title pricing-card-title">$3</h1>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col">
                <div class="card mb-4 rounded-3 shadow-sm border-primary">
                <div class="card-header py-3 text-white bg-primary border-primary">
                    <h4 class="my-0 fw-normal">Main Dishes</h4>
                </div>
            </div>

            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center" >
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Pancakes</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.
                            </p>
                            <h1 class="card-title pricing-card-title">$4</h1>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">French Toast</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.
                            </p>
                            <h1 class="card-title pricing-card-title">$5</h1>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Beary Veggie Sandwich</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.
                            </p>
                            <h1 class="card-title pricing-card-title">$8</h1>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">BLT</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Interested in the Beary Veggie Sandwich but also love bacon? Say no more.
                            </p>
                            <h1 class="card-title pricing-card-title">$6</h1>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Bagel and Lox</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.

                            </p>
                            <h1 class="card-title pricing-card-title">$8</h1>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Honeycomb</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.
                            </p>
                            <h1 class="card-title pricing-card-title">$6</h1>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Beary Bowl</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Get a big ole bowl of our berries! Side of honey is $1 extra.
                            </p>
                            <h1 class="card-title pricing-card-title">$7</h1>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">The Beary Best Porridge</h4>
                        </div>
                        <div class="card-body">
                            <p class="mt-3 mb-4 ">
                                Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.
                            </p>
                            <h1 class="card-title pricing-card-title">$5</h1>
                        </div>
                    </div>
                </div>




            </div>


        
        `

    }
    else if (displayContent == "contactNav") {
        pageTitle.textContent = "Contact Us";

        cardContent.innerHTML = `
            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center" >
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Chef</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Mama Bear</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>555-555-5554</li>
                                <li>totallyRealEmail@notFake.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Manager</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Papa Bear</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>555-555-5555</li>
                                <li>perfectlyRealEmail@notFake.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">Waiter</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">Baby Bear</h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>555-555-5556</li>
                                <li>totallyRealEmail@notFake.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        
        `

 
        
    }
}


