import { Link } from "react-router-dom"

function LandingPage (){

    return(

        <main>

            <section className="relative bg-slate-900 text-white px-30 bg-cover bg-center py-24 "
            style={{backgroundImage:"url('/hero-excavator.jpg')"}}>


                <div className = "absolute inset-0 bg-slate-900/70"></div>

                <div className="relative z-10">
                <span className="inline-block bg-amber-600/20 backdrop-blur-md border border-amber-600/50 text-amber-400 text-xs font-semibold tracking-wide mx-2 px-3 py-1 mb-3.5">
                  RELIABLE EQUIPMENT FOR HIRE

                </span>


    <h1 className="text-5xl md:text-6xl font-black leading-tight mb-5">
        HEAVY POWER. <br/>
        <span className="text-amber-600 ">

      PRESTIGE SERVICE.
        </span>

    </h1>

    <p className="max-w-x1 text-slate-300 text-lg mb-8">
          The most reliable construction and mining equipment hire in Tzaneen. <br/>
          Premium machinery maintained to the highest industrial standards —
          delivered <br/>across the Limpopo region.

    </p>


    <div className="flex gap-4">
  <Link to = "/equipment"
  className= "bg-amber-600 text-slate-900 font-bold rounded-lg px-4 py-3 transition-colors duration-200 hover:bg-amber-800">

BROWSE OUR FLEET
  </Link>


<Link to="/contact"
className="border border-white text-white font-bold rounded-lg transition-colors hover:border-amber-600 hover:text-amber-600 px-4 py-3">BOOK OUR FLEET</Link>
</div>
    </div>
 </section>     
    </main>
    )
}

{/*who we are section*/}

 {/*<section className="px-8 py-16 bg-white">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Who We Are</h2>
        <p className="max-w-2xl text-slate-600 text-lg mb-12">
          LJ Plant Hire is a Tzaneen-based construction and mining equipment
          hire company serving Limpopo's Tzaneen, Polokwane, and Phalaborwa
          regions with well-maintained, industrial-grade machinery and
          reliable site delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 text-white p-6 border-l-4 border-amber-500">
            <h3 className="text-amber-500 font-bold text-sm tracking-wide mb-2">
              RATES
            </h3>
            <p className="text-slate-300">
              Prices exclude VAT, fuel and delivery. Operator supplied on
              request.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-6 border-l-4 border-amber-500">
            <h3 className="text-amber-500 font-bold text-sm tracking-wide mb-2">
              WEEKLY & MONTHLY
            </h3>
            <p className="text-slate-300">
              Volume discounts available for extended hire — call to
              negotiate.
            </p>
          </div>

          <div className="bg-slate-900 text-white p-6 border-l-4 border-amber-500">
            <h3 className="text-amber-500 font-bold text-sm tracking-wide mb-2">
              DELIVERY
            </h3>
            <p className="text-slate-300">
              Site delivery across Tzaneen, Polokwane, Phalaborwa and greater
              Limpopo.
            </p>
          </div>
        </div>
      </section> */}
    
export default LandingPage