import React from 'react';
import { Layout } from '../components/Layout';
import Image from 'next/image';
const Contact = () => {
  return (
    <Layout title="CONTACT">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact Info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/profile.jpeg"
            width={60}
            height={60}
            alt="Avator"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-cs mt-2 text-gray-600">神奈川県ほげ町</p>
          <p className="font-bold mt-3">Email</p>
          <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-cs mt-2 text-gray-600">000-0000-0000</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
