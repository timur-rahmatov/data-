<div class="card">
            <div class="imgBx">
                <img src="2.jpg">
                <ul class="action">
                    <li>
                        <i class="fa fa-heart" aria-hidden="true"></i>
                        <span>Add to Wishlist</span>
                    </li>
                    <li>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        <span>Add to Cart</span>
                    </li>
                    <li>
                        <i class="fa fa-eye" aria-hidden="true"></i>
                        <span>View Details</span>
                    </li>
                </ul>
            </div>
            <div class="content">
                <div class="productName">
                    <h3>Analog Black Men Watch</h3>
                </div>
                <div class="price_rating">
                    <h2>$49.45</h2>
                    <div class="rating">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <i class="fa grey fa-star" aria-hidden="true"></i>
                        <i class="fa grey fa-star" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>





.container .card .imgBx
{
    position: relative;
    width: 100%;
    height: 310px;
    overflow: hidden;
}
.container .card .imgBx img
{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.5s ease-in-out;
    transform-origin: right;
} 
.container .card:hover .imgBx img
{
    transform: scale(1.5);
}

.action
{
    position: absolute;
    top: 10px;
    right: 10px;
}
.action li
{
    position: relative;
    list-style: none;
    width: 40px;
    height: 40px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 4px;
    cursor: pointer;
    transition: transform 0.5s;
    transform: translateX(60px);
}
.action li:nth-child(2)
{
    transition-delay: 0.15s;
}
.action li:nth-child(3)
{
    transition-delay: 0.3s;
}
.container .card:hover .action li
{
    transform: translateX(0px);
}
.action li:hover
{
    background: #ff2020;
    color: #fff;
}


.action li span
{
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translateY(-50%) translateX(-20px);
    white-space: nowrap;
    padding: 4px 6px;
    background: #fff;
    color: #333;
    font-weight: 500;
    font-size: 12px;
    border-radius: 4px;
    pointer-events: none;
    opacity: 0;
    transition: 0.5s;
}
.action li:hover span
{
    transform: translateY(-50%) translateX(0px);
    opacity: 1;
}
.action li span::before
{
    content: '';
    position: absolute;
    top: 50%;
    right: -4px;
    width: 8px;
    height: 8px;
    background: #f00;
    transform: translateY(-50%) rotate(45deg);
}
.container .card .content
{
    padding: 10px;
}
.container .card .content .productName h3
{
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin: 5px 0;
}
.container .card .content .price_rating
{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.container .card .content .price_rating h2
{
    font-size: 20px;
    color: #ff2020;
    font-weight: 500;
}
.container .card .content .price_rating .fa
{
    color: #ffd513;
    cursor: pointer;
}
.container .card .content .price_rating .fa.grey
{
    color: #ccc;
}