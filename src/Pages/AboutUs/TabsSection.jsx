import React, { useState } from 'react';

const tabs = [
  { id: 'story', label: 'Story' },
  { id: 'mission', label: 'Mission' },
  { id: 'success', label: 'Success' },
  { id: 'team', label: 'Team & Others' },
];

const contentText = `
We started with a simple promise — to make parcel delivery fast, reliable,
and stress-free. Over the years, our commitment to real-time tracking,
efficient logistics, and customer-first service has made us a trusted partner
for thousands. Whether it's a personal gift or a time-sensitive business
delivery, we ensure it reaches its destination — on time, every time.
`;

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('story');

  return (
    <div>
      {/* Tabs */}
      <div role="tablist" className="tabs tabs-bordered mb-6">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            onClick={() => setActiveTab(t.id)}
            className={`tab text-lg ${
              activeTab === t.id
                ? 'tab-active text-green-600 font-semibold'
                : ''
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-4 text-gray-600 leading-relaxed">
        <p>{contentText}</p>
        <p>{contentText}</p>
        <p>{contentText}</p>
      </div>
    </div>
  );
};

export default TabsSection;
