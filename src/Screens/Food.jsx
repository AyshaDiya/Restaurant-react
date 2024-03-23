import React from 'react'

const Home = () => {
    return (

        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            {/* <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol> */}
            {/* <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://images.squarespace-cdn.com/content/v1/4f6792f624ac778428aca39d/1476386140029-CPC693135A6NETEOH5R7/tremont-screenshot.jpg" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4" alt="second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwh60qTW26YhMOSTn2IXK8gyZd2-LfkJYgSywqlevqIP878vbncy0r8j2k5A8MY9wOVc&usqp=CAU" alt="Third slide" />
                </div>
            </div> */}
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>


            <h1>MENU</h1>
            <h2></h2>
            <h2></h2>
            <div className="card-group">
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src="https://as2.ftcdn.net/v2/jpg/04/18/22/53/1000_F_418225358_e5YoOcHll3N6Z3KcsWxypohDCo0FAjHf.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Chiken Biriyani</h5>
                        <p className="card-text">Traditional Malabar biriyani</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/wydpzezlbyahq1ao78cj" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Arabian Mandhi</h5>
                        <p className="card-text">Have the taste of Arabian mandhi</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://images.squarespace-cdn.com/content/v1/5f2fa039103c7a08856032c1/2f4b167e-fbcd-4b6f-9707-dd490cfcf06e/185DFEA1-6639-43A3-97C9-739195AFC44D.jpeg" alt="card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Thali Meals</h5>
                        <p className="card-text">Traditional Thali Meals</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>


            <h1>BREAKFAST HIGHLIGTS</h1>
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="https://i.pinimg.com/736x/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Masala Dosha</h5>
                        <p className="card-text">breakfast higlight</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://www.yummyoyummy.com/wp-content/uploads/2020/04/eZy-Watermark_30-03-2020_11-37-16PM.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Appam</h5>
                        <p className="card-text">Have the taste </p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://i.pinimg.com/originals/28/6a/ed/286aedcacad6d3836b928133cb7e98df.jpg" alt="card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Porrota</h5>
                        <p className="card-text">have a taste</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>

            <h1> ABOUT FOODIE GROUP</h1>
            <h3>Decades Of Delivering Delights</h3>
            <h6>Established in 1999 Foodie boats an unmatched heritage in culinary excellence.From classNameic delcacies of the region to innovative fusion of multinational cuisines,Foodie has been a delectable part of happy memories for families in kerala and other countries.calicut:+91 1234509870
            </h6>
            <h1>Exclusive Desserts</h1>

            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="https://townsquare.media/site/393/files/2022/04/attachment-shivansh-sethi-dKT6Q7q2UKs-unsplash.jpg?w=980&q=75" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Chocolate Browine</h5>
                        <p className="card-text">Have the taste of chocolate browine with icecreams</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://www.archanaskitchen.com/images/archanaskitchen/1-Author/moumita.malla-gmail.com/Saffron_Milk__Pudding.jpg" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Pudding</h5>
                        <p className="card-text">Have the taste </p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="card">
                    <img className="card-img-top" src="https://static.toiimg.com/photo/101136807.cms" alt="card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Ice Creams</h5>
                        <p className="card-text">have a taste</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>



        </div>


    )
}

export default Home