import { useState } from 'react';

const usePricing = () => {
  const [activeTab, setActiveTab] = useState('INDIVIDUAL');

  const tabs = ['INDIVIDUAL', 'STUDENT', 'ORGANIZATION'];

  const plansData = {
    INDIVIDUAL: [
      {
        title: 'Basic',
        price: '$9.99/month',
        features: [
          'Access to 100 tutorial videos per month',
          'Basic sewing and pattern-making toolkits',
          'Standard support (email only)',
          'Downloadable templates for beginners'
        ],
        buttonStyle: 'outline'
      },
      {
        title: 'Pro',
        price: '$19.99/month',
        features: [
          'Unlimited access to all tutorial videos',
          'Intermediate sewing and pattern-making toolkits',
          'Access to exclusive video content and webinars',
          'Priority support (email and live chat)',
          'Monthly downloadable patterns for intermediate levels',
          'Community forum access for tips and advice'
        ],
        buttonStyle: 'filled'
      },
      {
        title: 'Premium',
        price: '$29.99/month',
        features: [
          'All previous features',
          'Advanced sewing toolkits & pattern-making courses',
          'Personalized video consultations\n(1 session per month)',
          'Early access to new tutorials and pattern designs',
          'Exclusive discounts on partner fabric and sewing tool shops',
          'Custom pattern requests (one per month)'
        ],
        buttonStyle: 'outline'
      }
    ],
    STUDENT: [
      {
        title: 'Student Basic',
        price: '$4.99/month',
        features: [
          'Access to 50 tutorial videos per month',
          'Basic sewing toolkits',
          'Email support',
          'Student community access'
        ],
        buttonStyle: 'outline'
      },
      {
        title: 'Student Pro',
        price: '$9.99/month',
        features: [
          'Unlimited access to all tutorial videos',
          'Intermediate sewing toolkits',
          'Priority email support',
          'Access to student webinars'
        ],
        buttonStyle: 'filled'
      }
    ],
    ORGANIZATION: [
      {
        title: 'Org Basic',
        price: '$49.99/month',
        features: [
          'Access for up to 10 members',
          'Basic sewing toolkits',
          'Email support',
          'Organization dashboard'
        ],
        buttonStyle: 'outline'
      },
      {
        title: 'Org Pro',
        price: '$99.99/month',
        features: [
          'Access for up to 50 members',
          'Advanced sewing toolkits',
          'Priority support',
          'Custom organization webinars'
        ],
        buttonStyle: 'filled'
      }
    ]
  };
 const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return { activeTab, setActiveTab, tabs, plansData, handleTabChange };
};

export default usePricing;