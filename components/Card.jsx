import React from "react";
const image = "https://i.ibb.co/dmR2k9P/signature-zyzz-gif.gif";
//grid lg:grid-cols-3 lg:grid-rows-3 md:grid-cols-2
const Card = () => {
  return (
    
    <div className="grid  lg:grid-cols-2 xl:grid-cols-3 lg:grid-rows-3 md:grid-cols-2">
      
      <div className="mb-5">
        <div className="card w-96 h-[35rem] glass flex">
          <figure>
            <div
              className="w-[100%] h-[13rem] bg-cover bg-center bg-no-repeat hover:scale-110 duration-300"
              style={{ backgroundImage: `url(${image})` }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <div>
              <p> Gift Cards, Accounts, and Refund Services.</p>

              <p>💸 Everything HQ</p>
              <p>🚀 Fast Support</p>
              <p>🌟 Vouched</p>
              <p>🛍 Rewards & Giveaways</p>

              <p>
                <strong>💎 Autoshop: Chillbrosmarket.com</strong>
              </p>
              <p>✔️ Vouches: t.me/ChillbroIGotVouches</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join now!</button>
            </div>
          </div>
        </div>
      </div>

      

      <div className="">
        <div className="card w-96 h-[35rem] glass flex">
          <figure>
            <div
              className="w-[100%] h-[13rem] bg-cover bg-center bg-no-repeat hover:scale-110 duration-300"
              style={{ backgroundImage: `url(${image})` }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <div>
              <p> Gift Cards, Accounts, and Refund Services.</p>

              <p>💸 Everything HQ</p>
              <p>🚀 Fast Support</p>
              <p>🌟 Vouched</p>
              <p>🛍 Rewards & Giveaways</p>

              <p>
                <strong>💎 Autoshop: Chillbrosmarket.com</strong>
              </p>
              <p>✔️ Vouches: t.me/ChillbroIGotVouches</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join now!</button>
            </div>
          </div>
        </div>
      </div>

      

      <div className="">
        <div className="card w-96 h-[35rem] glass flex">
          <figure>
            <div
              className="w-[100%] h-[13rem] bg-cover bg-center bg-no-repeat hover:scale-110 duration-300"
              style={{ backgroundImage: `url(${image})` }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <div>
              <p> Gift Cards, Accounts, and Refund Services.</p>

              <p>💸 Everything HQ</p>
              <p>🚀 Fast Support</p>
              <p>🌟 Vouched</p>
              <p>🛍 Rewards & Giveaways</p>

              <p>
                <strong>💎 Autoshop: Chillbrosmarket.com</strong>
              </p>
              <p>✔️ Vouches: t.me/ChillbroIGotVouches</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join now!</button>
            </div>
          </div>
        </div>
      </div>


      <div className="">
        <div className="card w-96 h-[35rem] glass flex">
          <figure>
            <div
              className="w-[100%] h-[13rem] bg-cover bg-center bg-no-repeat hover:scale-110 duration-300"
              style={{ backgroundImage: `url(${image})` }}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Life hack</h2>
            <div>
              <p> Gift Cards, Accounts, and Refund Services.</p>

              <p>💸 Everything HQ</p>
              <p>🚀 Fast Support</p>
              <p>🌟 Vouched</p>
              <p>🛍 Rewards & Giveaways</p>

              <p>
                <strong>💎 Autoshop: Chillbrosmarket.com</strong>
              </p>
              <p>✔️ Vouches: t.me/ChillbroIGotVouches</p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Join now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
