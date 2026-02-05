import { useState } from "react";
import { TrendingUp, TrendingDown, Minus, AlertTriangle, CheckCircle } from 'lucide-react';

const CarParkVisualization = () => {
  const [view, setView] = useState('report');
  const [bookingLimit, setBookingLimit] = useState(25);
  const [driveUpThreshold, setDriveUpThreshold] = useState(85);
  const [subscriberBuffer, setSubscriberBuffer] = useState(10);

  const ManagerReport = () => (
    <div className="bg-white p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-2xl font-bold mb-2">Car Park Manager Report</h1>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div><span className="font-semibold">Car Park:</span> Marseille Euromed (130041)</div>
          <div><span className="font-semibold">Period:</span> March 2025</div>
          <div><span className="font-semibold">Capacity:</span> 842 spaces</div>
        </div>
      </div>

      {/* Section A - Performance Snapshot */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-gray-800">📊 Performance Snapshot</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-2 border-green-500 bg-green-50 p-4 rounded">
            <div className="text-sm text-gray-600">Revenue / Space</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              €4.80 <TrendingUp className="text-green-600" size={20} />
            </div>
            <div className="text-sm text-green-600">+6.2% MoM</div>
          </div>
          <div className="border-2 border-green-500 bg-green-50 p-4 rounded">
            <div className="text-sm text-gray-600">Avg Occupancy</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              78% <Minus className="text-gray-600" size={20} />
            </div>
            <div className="text-sm text-gray-600">Stable</div>
          </div>
          <div className="border-2 border-green-500 bg-green-50 p-4 rounded">
            <div className="text-sm text-gray-600">Peak Hour Occupancy</div>
            <div className="text-2xl font-bold">96%</div>
            <div className="text-sm text-gray-600">Controlled</div>
          </div>
          <div className="border-2 border-yellow-500 bg-yellow-50 p-4 rounded">
            <div className="text-sm text-gray-600">Subscriber Utilization</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              84% <TrendingDown className="text-yellow-600" size={20} />
            </div>
            <div className="text-sm text-yellow-600">Slight dip</div>
          </div>
        </div>
      </div>

      {/* Section B - Capacity Mix */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-gray-800">🎯 Capacity Mix: Actual vs Optimal</h2>
        <div className="text-sm font-semibold mb-2">Peak Hours (08:00–17:00)</div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left"></th>
              <th className="border border-gray-300 p-2">Subscribers</th>
              <th className="border border-gray-300 p-2">Bookings</th>
              <th className="border border-gray-300 p-2">Drive-ups</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Actual</td>
              <td className="border border-gray-300 p-2 text-center bg-red-50">62%</td>
              <td className="border border-gray-300 p-2 text-center bg-yellow-50">18%</td>
              <td className="border border-gray-300 p-2 text-center bg-green-50">20%</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2 font-semibold">Recommended</td>
              <td className="border border-gray-300 p-2 text-center">55%</td>
              <td className="border border-gray-300 p-2 text-center">25%</td>
              <td className="border border-gray-300 p-2 text-center">20%</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2 p-3 bg-blue-50 border-l-4 border-blue-500 text-sm">
          <strong>Manager takeaway:</strong> We are over-allocating to subscribers during weekday mornings.
        </div>
      </div>

      {/* Section C - Revenue Quality */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-gray-800">💰 Revenue Quality</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="border-2 border-red-500 bg-red-50 p-4 rounded">
            <div className="text-sm text-gray-600">Discounted Products Share</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              34% <AlertTriangle className="text-red-600" size={20} />
            </div>
            <div className="text-sm text-red-600">High</div>
          </div>
          <div className="border-2 border-yellow-500 bg-yellow-50 p-4 rounded">
            <div className="text-sm text-gray-600">Avg Revenue / Hour</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              €2.10 <TrendingDown className="text-yellow-600" size={20} />
            </div>
          </div>
          <div className="border-2 border-yellow-500 bg-yellow-50 p-4 rounded">
            <div className="text-sm text-gray-600">Long-Stay Share (&gt;6h)</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              41% <AlertTriangle className="text-yellow-600" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Section D - Model Guidance */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-3 text-gray-800">🎯 Recommended Actions</h2>
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Reduce weekday subscriber acceptance 08:00–10:00 by ~5%</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Increase booking availability during 09:00–11:00</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 font-bold">•</span>
            <span>Push digital booking for off-peak (14:00–17:00)</span>
          </li>
        </ul>
      </div>

      {/* Section E - Confidence */}
      <div className="bg-gray-100 p-4 rounded">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <div className="font-semibold">Model Confidence</div>
            <div className="flex items-center gap-1">
              <CheckCircle size={16} className="text-green-600" />
              <span>High</span>
            </div>
          </div>
          <div>
            <div className="font-semibold">Expected Revenue Uplift</div>
            <div>+4% to +7%</div>
          </div>
          <div>
            <div className="font-semibold">Main Risk</div>
            <div>Event-driven demand volatility</div>
          </div>
        </div>
      </div>
    </div>
  );

  const WhatIfSimulation = () => {
    const calculateSuggestedMix = () => {
      const bookingPct = Math.min(Math.round(bookingLimit * 0.9), 35);
      const driveUpPct = Math.max(20, Math.round((100 - driveUpThreshold) * 0.4));
      const subscriberPct = 100 - bookingPct - driveUpPct;
      
      return { subscriberPct, bookingPct, driveUpPct };
    };
    
    const suggestedMix = calculateSuggestedMix();
    const revenueUplift = ((bookingLimit - 20) * 0.3 + (90 - driveUpThreshold) * 0.2).toFixed(1);
    
    return (
      <div className="bg-gray-50 p-6 max-w-6xl mx-auto">
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">Policy Simulation Dashboard</h1>
            <div className="bg-purple-100 border-2 border-purple-500 px-4 py-2 rounded-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🧪</span>
                <div>
                  <div className="font-bold text-purple-900">Scenario Mode</div>
                  <div className="text-xs text-purple-700">Outputs Not Yet Deployed</div>
                </div>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Experiment with policy settings to see suggested optimal mix under different scenarios
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <span>⚙️</span> Policy Settings
            </h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold">Booking Limit (%)</label>
                  <span className="text-sm font-bold text-blue-600">{bookingLimit}%</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="40"
                  value={bookingLimit}
                  onChange={(e) => setBookingLimit(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-gray-500 mt-1">
                  Max % of capacity available for advance bookings
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold">Drive-up Threshold (%)</label>
                  <span className="text-sm font-bold text-green-600">{driveUpThreshold}%</span>
                </div>
                <input
                  type="range"
                  min="70"
                  max="95"
                  value={driveUpThreshold}
                  onChange={(e) => setDriveUpThreshold(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-gray-500 mt-1">
                  Occupancy level at which to restrict drive-ups
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-semibold">Subscriber Buffer (%)</label>
                  <span className="text-sm font-bold text-purple-600">{subscriberBuffer}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  value={subscriberBuffer}
                  onChange={(e) => setSubscriberBuffer(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-xs text-gray-500 mt-1">
                  Reserved capacity buffer for subscriber guarantees
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="bg-blue-50 p-3 rounded text-xs">
                  <strong>Current Policy:</strong> Booking Limit 20% • Drive-up Threshold 90% • Buffer 8%
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow border-2 border-purple-300">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-lg font-bold">Suggested Optimal Product Mix</h2>
                <div className="bg-purple-100 border border-purple-400 px-2 py-1 rounded text-xs font-bold text-purple-800">
                  SCENARIO OUTPUT
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                  <span className="font-semibold">Subscribers</span>
                  <span className="text-2xl font-bold text-purple-600">{suggestedMix.subscriberPct}%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                  <span className="font-semibold">Bookings</span>
                  <span className="text-2xl font-bold text-blue-600">{suggestedMix.bookingPct}%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                  <span className="font-semibold">Drive-ups</span>
                  <span className="text-2xl font-bold text-green-600">{suggestedMix.driveUpPct}%</span>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-3 text-xs">
                <strong>⚠️ Note:</strong> This is a proposed mix under the selected policy settings. 
                Not currently deployed or active.
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-bold mb-3">Expected Scenario Outcomes</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-green-300 bg-green-50 p-3 rounded">
                  <div className="text-xs text-gray-600">Revenue Uplift</div>
                  <div className="text-xl font-bold text-green-700">+{revenueUplift}%</div>
                </div>
                <div className="border border-blue-300 bg-blue-50 p-3 rounded">
                  <div className="text-xs text-gray-600">Turnaway Reduction</div>
                  <div className="text-xl font-bold text-blue-700">-12%</div>
                </div>
                <div className="border border-purple-300 bg-purple-50 p-3 rounded">
                  <div className="text-xs text-gray-600">Peak Occupancy</div>
                  <div className="text-xl font-bold text-purple-700">92%</div>
                </div>
                <div className="border border-orange-300 bg-orange-50 p-3 rounded">
                  <div className="text-xs text-gray-600">Avg Revenue/Space</div>
                  <div className="text-xl font-bold text-orange-700">€5.20</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg shadow text-white">
              <h3 className="font-bold mb-2">Next Steps</h3>
              <p className="text-sm mb-4 opacity-90">
                Once satisfied with scenario results, recommended mix will appear in the Monthly Manager Report for review and approval.
              </p>
              <button className="bg-white text-purple-700 px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition">
                Save Scenario for Review
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Dashboard = () => (
    <div className="bg-gray-50 p-6 max-w-6xl mx-auto">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h1 className="text-2xl font-bold mb-4">Live Operations Dashboard</h1>
        <div className="flex gap-4">
          <select className="border border-gray-300 rounded px-3 py-2 text-sm">
            <option>Marseille Euromed</option>
          </select>
          <input type="date" className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <select className="border border-gray-300 rounded px-3 py-2 text-sm">
            <option>Weekday</option>
            <option>Weekend</option>
          </select>
          <select className="border border-gray-300 rounded px-3 py-2 text-sm">
            <option>Event OFF</option>
            <option>Event ON</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-3">Capacity Over Time</h3>
          <div className="h-64 bg-gray-50 rounded relative p-4">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-600 pr-2">
              <span>842</span>
              <span>700</span>
              <span>550</span>
              <span>400</span>
              <span>250</span>
              <span>0</span>
            </div>
            
            <div className="ml-8 h-full relative">
              <div className="absolute top-0 left-0 right-0 border-t-2 border-gray-800 z-10">
                <span className="text-xs text-gray-800 bg-white px-1">Total Capacity</span>
              </div>
              
              <div className="absolute left-0 right-0 bg-green-200 opacity-30" 
                   style={{top: '10%', height: '6%'}}>
              </div>
              
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M 0,180 Q 80,150 160,140 T 320,145 Q 400,150 480,160 Q 560,175 640,185 T 800,190"
                  fill="none" 
                  stroke="#8B5CF6" 
                  strokeWidth="2"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                <path 
                  d="M 0,185 L 66,160 L 133,95 L 200,75 L 266,70 L 333,85 L 400,110 L 466,130 L 533,95 L 600,80 L 666,120 L 733,155 L 800,180"
                  fill="none" 
                  stroke="#3B82F6" 
                  strokeWidth="3"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600">
                {['8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h', '20h'].map((h, i) => (
                  <span key={i}>{h}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-3 text-xs flex-wrap">
            <div className="flex items-center gap-1">
              <div className="w-4 h-0.5 bg-gray-800"></div>
              <span>Total Capacity (842)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-0.5 bg-purple-500"></div>
              <span>Subscriber Baseline</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-0.5 bg-blue-500 border-2 border-blue-500"></div>
              <span>Actual Occupancy</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-4 h-3 bg-green-200 opacity-50 border border-green-400"></div>
              <span>Optimal Band (90-95%)</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-3">Product Mix by Hour (% of Occupied Spaces)</h3>
          <div className="h-64 bg-gray-50 rounded relative p-4">
            <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-600 pr-2">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
            
            <div className="ml-8 h-full flex items-end justify-between gap-0.5">
              {[
                {sub: 60, book: 15, drive: 10},
                {sub: 62, book: 18, drive: 12},
                {sub: 58, book: 20, drive: 15},
                {sub: 55, book: 22, drive: 15},
                {sub: 45, book: 25, drive: 18},
                {sub: 42, book: 28, drive: 20},
                {sub: 40, book: 30, drive: 22},
                {sub: 48, book: 25, drive: 20},
                {sub: 52, book: 23, drive: 18},
                {sub: 45, book: 20, drive: 25},
                {sub: 35, book: 15, drive: 30},
                {sub: 25, book: 10, drive: 25},
              ].map((data, i) => {
                const total = data.sub + data.book + data.drive;
                const subHeight = (data.sub / 100) * 100;
                const bookHeight = (data.book / 100) * 100;
                const driveHeight = (data.drive / 100) * 100;
                
                return (
                  <div key={i} className="flex-1 flex flex-col justify-end items-center" style={{height: '100%'}}>
                    <div className="w-full flex flex-col" style={{height: `${total}%`}}>
                      <div className="bg-green-500" style={{height: `${(driveHeight/total)*100}%`}}></div>
                      <div className="bg-blue-500" style={{height: `${(bookHeight/total)*100}%`}}></div>
                      <div className="bg-purple-500" style={{height: `${(subHeight/total)*100}%`}}></div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="ml-8 mt-1 flex justify-between text-xs text-gray-600">
              {['8h', '9h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h', '18h', '19h'].map((h, i) => (
                <span key={i} className="flex-1 text-center">{h}</span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 mt-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-purple-500 rounded"></div>
              <span>Subscribers (bottom)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-blue-500 rounded"></div>
              <span>Bookings (middle)</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-green-500 rounded"></div>
              <span>Drive-ups (top)</span>
            </div>
          </div>
          <div className="mt-2 p-2 bg-yellow-50 border-l-4 border-yellow-500 text-xs">
            <strong>Note:</strong> Peak hours (8-11h) show subscribers consuming ~60% while bookings are constrained at ~18-20%
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-3">Revenue per Space (€/hour)</h3>
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              <div className="flex">
                <div className="flex flex-col justify-start pr-2">
                  <div className="h-6"></div>
                  {['06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].map(hour => (
                    <div key={hour} className="h-6 text-xs flex items-center text-gray-600 font-medium">
                      {hour}
                    </div>
                  ))}
                </div>
                
                <div className="flex-1">
                  <div className="flex mb-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="flex-1 text-xs font-bold text-center px-1">
                        {day}
                      </div>
                    ))}
                  </div>
                  
                  {[
                    [1.2, 1.1, 1.3, 1.2, 1.4, 0.8, 0.6],
                    [2.1, 2.3, 2.2, 2.4, 2.3, 1.2, 0.9],
                    [3.8, 3.9, 3.7, 3.8, 3.6, 2.1, 1.4],
                    [4.2, 4.3, 4.1, 4.4, 4.2, 2.8, 1.8],
                    [4.5, 4.6, 4.4, 4.7, 4.5, 3.2, 2.1],
                    [4.1, 4.2, 4.0, 4.3, 4.1, 3.5, 2.6],
                    [3.2, 3.3, 3.1, 3.4, 3.2, 3.8, 3.1],
                    [2.8, 2.9, 2.7, 3.0, 2.8, 4.1, 3.4],
                    [2.6, 2.7, 2.5, 2.8, 2.6, 4.3, 3.8],
                    [3.0, 3.1, 2.9, 3.2, 3.0, 4.5, 4.2],
                    [3.6, 3.7, 3.5, 3.8, 3.6, 4.2, 3.9],
                    [3.8, 3.9, 3.7, 4.0, 3.8, 3.8, 3.5],
                    [3.2, 3.3, 3.1, 3.4, 3.2, 3.2, 3.0],
                    [2.8, 2.9, 2.7, 3.0, 3.4, 3.6, 3.4],
                    [2.1, 2.2, 2.0, 2.3, 2.8, 3.2, 3.0],
                    [1.6, 1.7, 1.5, 1.8, 2.2, 2.6, 2.4],
                    [1.1, 1.2, 1.0, 1.3, 1.8, 2.1, 1.8],
                  ].map((row, hourIdx) => (
                    <div key={hourIdx} className="flex gap-1 mb-1">
                      {row.map((value, dayIdx) => {
                        let bgColor, textColor;
                        if (value >= 4.0) {
                          bgColor = 'bg-green-600';
                          textColor = 'text-white';
                        } else if (value >= 3.0) {
                          bgColor = 'bg-green-400';
                          textColor = 'text-white';
                        } else if (value >= 2.0) {
                          bgColor = 'bg-yellow-400';
                          textColor = 'text-gray-800';
                        } else if (value >= 1.5) {
                          bgColor = 'bg-orange-400';
                          textColor = 'text-white';
                        } else {
                          bgColor = 'bg-red-400';
                          textColor = 'text-white';
                        }
                        
                        return (
                          <div 
                            key={dayIdx} 
                            className={`flex-1 ${bgColor} ${textColor} rounded text-xs font-semibold flex items-center justify-center h-6`}
                          >
                            {value.toFixed(1)}
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-3 flex items-center gap-4 text-xs">
                <span className="font-semibold">Revenue:</span>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-red-400 rounded"></div>
                  <span>&lt;€1.5</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-orange-400 rounded"></div>
                  <span>€1.5-2.0</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-yellow-400 rounded"></div>
                  <span>€2.0-3.0</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-green-400 rounded"></div>
                  <span>€3.0-4.0</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-green-600 rounded"></div>
                  <span>≥€4.0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-2 p-2 bg-blue-50 border-l-4 border-blue-500 text-xs">
            <strong>Key insight:</strong> Weekday mornings (9-11h) show highest revenue/space. Weekends peak later (14-16h).
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold mb-3">Policy Tracker & Recommendations</h3>
          <div className="space-y-3 mb-4">
            <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
              <span className="text-sm">Booking Limit Used Today</span>
              <span className="font-bold">85%</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-yellow-50 rounded">
              <span className="text-sm">Walk-in Rejections</span>
              <span className="font-bold">12</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-green-50 rounded">
              <span className="text-sm">Subscriber Turnaways</span>
              <span className="font-bold flex items-center gap-1">
                0 <CheckCircle size={16} className="text-green-600" />
              </span>
            </div>
          </div>
          
          <div className="border-t pt-3">
            <h4 className="font-semibold text-sm mb-2">Tomorrow 09:00–11:00:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-green-700">
                <span className="font-bold">+</span>
                <span>Allow 8 more bookings</span>
              </div>
              <div className="flex items-start gap-2 text-red-700">
                <span className="font-bold">−</span>
                <span>Restrict discounted drive-ups</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto mb-4">
        <div className="bg-white rounded-lg shadow p-2 flex gap-2">
          <button
            onClick={() => setView('report')}
            className={`px-6 py-2 rounded font-semibold transition ${
              view === 'report' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📄 Manager Report (Monthly)
          </button>
          <button
            onClick={() => setView('simulation')}
            className={`px-6 py-2 rounded font-semibold transition ${
              view === 'simulation' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🧪 Policy Simulation
          </button>
          <button
            onClick={() => setView('dashboard')}
            className={`px-6 py-2 rounded font-semibold transition ${
              view === 'dashboard' 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            📊 Live Dashboard
          </button>
        </div>
      </div>

      {view === 'report' ? <ManagerReport /> : view === 'simulation' ? <WhatIfSimulation /> : <Dashboard />}
    </div>
  );
};

export default CarParkVisualization;