import React from "react";

import Android from "../../img/uploads/android.png";
import AWS from "../../img/uploads/aws.png";
import Flutter from "../../img/uploads/flutter.png";
import GoogleCloud from "../../img/uploads/googlecloud.png";
import Wordpress from "../../img/uploads/wordpress.png";
import Angular from "../../img/uploads/angular.png";
import CSS from "../../img/uploads/css.png";
import HTML from "../../img/uploads/html.png";
import Javascript1 from "../../img/uploads/javascript1.png";
import Javascript2 from "../../img/uploads/javascript2.png";
import react from "../../img/uploads/react.png";
import Vue from "../../img/uploads/vue.png";
import Apple from "../../img/uploads/apple.png";
import MangoDB from "../../img/uploads/mangoDB.png";
import PostgreSQL from "../../img/uploads/postgreSQL.png";
import Python from "../../img/uploads/python.png";

function Section2() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Core Technologies
          </h1>
        </div>

        {/* Core Technologies Gallery - 2 Rows, 8 items per row */}
        <div className="space-y-8">
          {/* First Row of Technologies */}
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            <img
              src={Android}
              className="w-20 h-20 object-contain mx-auto"
              alt="Android"
            />
            <img
              src={AWS}
              className="w-20 h-20 object-contain mx-auto"
              alt="AWS"
            />
            <img
              src={Flutter}
              className="w-20 h-20 object-contain mx-auto"
              alt="Flutter"
            />
            <img
              src={GoogleCloud}
              className="w-20 h-20 object-contain mx-auto"
              alt="Google Cloud"
            />
            <img
              src={Wordpress}
              className="w-20 h-20 object-contain mx-auto"
              alt="Wordpress"
            />
            <img
              src={Angular}
              className="w-20 h-20 object-contain mx-auto"
              alt="Angular"
            />
            <img
              src={CSS}
              className="w-20 h-20 object-contain mx-auto"
              alt="CSS"
            />
            <img
              src={HTML}
              className="w-20 h-20 object-contain mx-auto"
              alt="HTML"
            />
          </div>

          {/* Second Row of Technologies */}
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            <img
              src={Javascript1}
              className="w-20 h-20 object-contain mx-auto"
              alt="Javascript 1"
            />
            <img
              src={Javascript2}
              className="w-20 h-20 object-contain mx-auto"
              alt="Javascript 2"
            />
            <img
              src={react}
              className="w-20 h-20 object-contain mx-auto"
              alt="React"
            />
            <img
              src={Vue}
              className="w-20 h-20 object-contain mx-auto"
              alt="Vue"
            />
            <img
              src={Apple}
              className="w-20 h-20 object-contain mx-auto"
              alt="Apple"
            />
            <img
              src={MangoDB}
              className="w-20 h-20 object-contain mx-auto"
              alt="MangoDB"
            />
            <img
              src={PostgreSQL}
              className="w-20 h-20 object-contain mx-auto"
              alt="PostgreSQL"
            />
            <img
              src={Python}
              className="w-20 h-20 object-contain mx-auto"
              alt="Python"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
