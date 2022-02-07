import "./featuredinfo.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { ArrowUpward } from "@material-ui/icons";

export default function Featuredinfo() {
  return (
    <div>
    <div className="featured">
      <div className="featuredInfo">
          <span className="featuredTitle">Revanue</span>
          <div className="FeaturedMoneyContainer">
             <span className="featuredMoney">$200,90</span>
             <span className="featuredMoneyRate">-12.67<ArrowDownwardIcon className="featuredIconNegative"/></span>
          </div>
          <span className="featuredinfo">Compared to last month</span>
      </div>

      <div className="featuredInfo">
          <span className="featuredTitle">Sales</span>
          <div className="FeaturedMoneyContainer">
             <span className="featuredMoney">$546,90</span>
             <span className="featuredMoneyRate">-1.67<ArrowDownwardIcon className="featuredIconNegative"/></span>
          </div>
          <span className="featuredinfo">Compared to last month</span>
      </div>

      <div className="featuredInfo">
          <span className="featuredTitle">Cost</span>
          <div className="FeaturedMoneyContainer">
             <span className="featuredMoney">$4500,90</span>
             <span className="featuredMoneyRate">+3.6<ArrowUpward className="featuredIconPossitive"/></span>
          </div>
          <span className="featuredinfo">Compared to last month</span>
      </div>
    </div>       
  </div>
  )
}

