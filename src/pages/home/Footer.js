import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer
        style={
            {
             background:`url(${footer})`,
             backgroundSize:'cover'
            } 
         }  class="p-10 mx-0 ">
  <div className='footer'>
  <div >
    <span class="footer-title">Services</span> 
    <a href='#h' class="link link-hover">Branding</a>
    <a href='#h' class="link link-hover">Design</a>
    <a href='#h' class="link link-hover">Marketing</a>
    <a href='#h' class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a href='#h' class="link link-hover">About us</a>
    <a href='#h' class="link link-hover">Contact</a>
    <a href='#h' class="link link-hover">Jobs</a>
    <a href='#h' class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a href='#h' class="link link-hover">Terms of use</a>
    <a href='#h' class="link link-hover">Privacy policy</a>
    <a href='#h' class="link link-hover">Cookie policy</a>
  </div>
  </div>
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>Copyright © 2022 - All right reserved by Fahad</p>
  </div>
</footer>
</footer>
    );
};

export default Footer;