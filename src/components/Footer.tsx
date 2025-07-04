import React from "react";
import Container from "./Container";

const Footer: React.FC = () => {
  return (
    <Container className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          <div>
            <h4 className="font-medium mb-2">All Departments</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Store Directory</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Careers</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Our Company</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Sell on Walmart.com</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Help</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Product Recalls</h4>
          </div>
          <div>
            <h4 className="font-medium mb-2">Accessibility</h4>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8 text-sm">
          <div>
            <p>Tax Exempt Program</p>
          </div>
          <div>
            <p>Get the Walmart App</p>
          </div>
          <div>
            <p>Safety Data Sheet</p>
          </div>
          <div>
            <p>Terms of Use</p>
          </div>
          <div>
            <p>Privacy Notice</p>
          </div>
          <div>
            <p>California Supply Chain Act</p>
          </div>
          <div>
            <p>Your Privacy Choices</p>
          </div>
          <div>
            <p>Notice at Collection</p>
          </div>
        </div>

        <div className="text-center text-sm text-gray-300">
          <p>
            © 2025 Walmart. The trademarks Walmart and the Walmart Spark design
            are registered with the US Patent and Trademark Office. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
