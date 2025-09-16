import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#6B8E74] mt-2 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo */}
        <div>
          <h3 className="font-bold text-xl mb-4">GiftWellSoon</h3>
          <p className="text-gray-900 mb-4">We’re here for you.</p>
          <div className="flex space-x-4 text-2xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><AiOutlineTikTok /></a>
            <a href="#"><FaPinterestP /></a>
          </div>
        </div>

        {/* as */}
        <div>
          <h4 className="font-semibold mb-3">GiftWellSoon</h4>
          <ul className="space-y-2 text-gray-900">
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Find a GiftWell</a></li>
            <li><a href="#">Create a GiftWell</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Support & Resources</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Get in Touch</h4>
          <p>support@giftwellsoon.com</p>
          <p>(000) 000-0000</p>
          <p>123 Harmony Lane, Suite 200 Springfield, NY</p>
        </div>
      </div>
    </footer>
  );
}
