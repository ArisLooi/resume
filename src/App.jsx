import React from 'react';

const Resume = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">John Doe</h1>
        <p className="text-gray-600 mb-4">Full Address • City, State ZIP • Phone Number • E-mail</p>

        <div className="mb-4">
          <h2 className="text-lg font-bold">OBJECTIVE</h2>
          <p>Design apparel print for an innovative retail company</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold">EDUCATION</h2>
          <p>UNIVERSITY OF MINNESOTA</p>
          <p>College of Design</p>
          <ul className="list-disc pl-6">
            <li>Bachelor of Science in Graphic Design</li>
            <li>Cumulative GPA 3.9, Dean's List</li>
            <li>Publications into Range Scholarship</li>
          </ul>
          <p>City, State</p>
          <p>May 2011</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold">WORK EXPERIENCE</h2>
          <div className="mb-4">
            <h3 className="font-bold">AMERICAN EAGLE</h3>
            <p>Sales Associate</p>
            <p>City, State</p>
            <p>July 2009 - Present</p>
            <ul className="list-disc pl-6">
              <li>Collaborated with the store merchandiser creating displays to attract clientele</li>
              <li>Use my brand awareness to assist customers in their shopping experience</li>
              <li>Thoroughly scan every piece of merchandise for inventory control</li>
              <li>Process all payment to increase my product knowledge</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">PLANET BEACH</h3>
            <p>Sales Consultant</p>
            <p>City, State</p>
            <p>Aug. 2006 - Aug. 2008</p>
            <ul className="list-disc pl-6">
              <li>Sell retail and memberships to meet company sales goals</li>
              <li>Build organizational skills by single-handedly ensuring all operating procedures</li>
              <li>Communicate with clients to fulfill their wants and needs</li>
              <li>Attend promotional events to market our services</li>
              <li>Handle cash and deposits during opening and closing</li>
              <li>Received employee of the month award twice</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">HEARTBREAKER</h3>
            <p>Sales Associate</p>
            <p>City, State</p>
            <p>May 2008 - Aug. 2008</p>
            <ul className="list-disc pl-6">
              <li>Stocked sales floor with fast fashion inventory</li>
              <li>Assisted clients by exchanging items to ensure successful merchandise in a retail market</li>
              <li>Offered advice and assistance to each guest</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="font-bold">VICTORIA'S SECRET</h3>
            <p>Fashion Representative</p>
            <p>City, State</p>
            <p>Jan. 2006 - Feb. 2009</p>
            <ul className="list-disc pl-6">
              <li>Applied key leadership skills by assisting in the training of co-workers</li>
              <li>Set up merchandising and displays in order to entice future customers</li>
              <li>Provided superior customer service by helping with consumer decisions</li>
              <li>Took accurate inventory</li>
            </ul>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-bold">VOLUNTEER EXPERIENCE</h2>
          <div className="mb-4">
            <h3 className="font-bold">TARGET CORPORATION</h3>
            <p>Brand Ambassador</p>
            <p>City, State</p>
            <p>August 2009</p>
            <ul className="list-disc pl-6">
              <li>Represented Personna Marketing and Target Inc. at a college event</li>
              <li>Engaged University of Minnesota freshman in the Target brand experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;