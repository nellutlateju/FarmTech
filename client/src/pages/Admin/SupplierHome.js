
import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const SupplierHome = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Layout>
      <div className="supplier-home-container container">
        <div className="supplier-welcome d-flex flex-column mt-4">
          <h1 className="supplier-welcome-title">
            Welcome Supplier <b className="text-success">{user?.name}</b>
          </h1>
          <h3 className="supplier-subtitle">Empower Your Business</h3>
          <hr />
          <p className="supplier-description">
            As a valued supplier, you play a crucial role in ensuring that essential goods are available to your community. Your dedication to maintaining a well-stocked supply store helps meet the needs of countless customers, supporting them in their daily lives and operations.
          </p>
          <p className="supplier-description">
            You can track your inventory, manage orders, and keep your customers informed about the latest products and offers. Your commitment to quality and service makes a significant impact on the community, ensuring they have reliable access to necessary supplies.
          </p>
          <p className="supplier-description">
            Please check the latest supply trends, manage your store effectively, and reach out to us if you have any questions or need support in optimizing your operations. Your continued partnership is vital in maintaining a robust supply chain for everyone.
          </p>
        </div>
      </div>
      <style jsx>{`
        .supplier-home-container {
          background-color: #f5f7fa;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .supplier-welcome-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
        }

        .supplier-subtitle {
          font-size: 1.75rem;
          font-weight: 600;
          color: #2980b9;
          margin-bottom: 20px;
        }

        .supplier-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #34495e;
          margin-bottom: 15px;
        }

        .supplier-welcome {
          padding-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
};

export default SupplierHome;
