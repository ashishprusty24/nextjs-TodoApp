import React from "react";

const ContactLayout = ({ children }) => {
  return children;
};

export async function generateMetadata({ params }) {
  return {
    title: params?.slug.split("-").join(" "),
  };
}

export default ContactLayout;
