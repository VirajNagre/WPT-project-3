import React from "react";

const CardGrid = () => {
  return (
    <div>
      <div class="row">
        <div class="col-xl-6 col-md-12">

          <div class="card overflow-hidden">
            <div class="card-content">
              <div class="card-body cleartfix">
                <div class="media align-items-stretch">
                  <div class="align-self-center">
                    <i class="icon-pencil primary font-large-2 mr-2"></i>
                  </div>
                  <div class="media-body">
                    <h4>Total Posts</h4>
                    <span>Monthly blog posts</span>
                  </div>
                  <div class="align-self-center">
                    <h1>18,000</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div class="col-xl-6 col-md-12">
          <div class="card">
            <div class="card-content">
              <div class="card-body cleartfix">
                <div class="media align-items-stretch">
                  <div class="align-self-center">
                    <i class="icon-speech warning font-large-2 mr-2"></i>
                  </div>
                  <div class="media-body">
                    <h4>Total Comments</h4>
                    <span>Monthly blog comments</span>
                  </div>
                  <div class="align-self-center">
                    <h1>84,695</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xl-6 col-md-12">
          <div class="card">
            <div class="card-content">
              <div class="card-body cleartfix">
                <div class="media align-items-stretch">
                  <div class="align-self-center">
                    <h1 class="mr-2">$76,456.00</h1>
                  </div>
                  <div class="media-body">
                    <h4>Total Sales</h4>
                    <span>Monthly Sales Amount</span>
                  </div>
                  <div class="align-self-center">
                    <i class="icon-heart danger font-large-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-md-12">
          <div class="card">
            <div class="card-content">
              <div class="card-body cleartfix">
                <div class="media align-items-stretch">
                  <div class="align-self-center">
                    <h1 class="mr-2">$36,000.00</h1>
                  </div>
                  <div class="media-body">
                    <h4>Total Cost</h4>
                    <span>Monthly Cost</span>
                  </div>
                  <div class="align-self-center">
                    <i class="icon-wallet success font-large-2"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
