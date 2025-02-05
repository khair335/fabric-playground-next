"use client"
import React, { useState } from 'react';
import PageTitle from '@/components/ui/PageTitle';

import { PiCalendarDotsLight } from 'react-icons/pi';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal/Modal';

import Visa from '@/assets/Payment method/Visa.svg';
import MasterCard from '@/assets/Payment method/Mastercard.svg';
import PayPal from '@/assets/Payment method/PayPal.svg';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsDot } from 'react-icons/bs';
import { LiaCheckCircle } from 'react-icons/lia';
import { LuPlus } from 'react-icons/lu';
import TabCard from './TabCard';
import { SectionTitle } from '../profile/page';

const PaymentInformation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('individual');
  const [paymentTypeModal, setPaymentTypeModal] = useState(false);
  const [paymentType, setPaymentType] = useState('creditCard');
  const [oneTimePaymentModal, setOneTimePaymentModal] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const togglePaymentTypeModal = () => {
    setPaymentTypeModal(!paymentTypeModal);
  };
  const tabs = ['individual', 'student', 'organization']

  const individualData = [
    {
      title: 'Basic',
      price: '$9.99/month',
      features: [
        'Access to 100 tutorial videos per month',
        'Basic sewing and pattern-making toolkits',
        'Standard support (email only)',
        'Downloadable templates for beginners',
      ],
      buy: true,
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
        'Community forum access for tips and advice',
      ],
      buy: !true,
    },
    {
      title: 'Premium',
      price: '$29.99/month',
      features: [
        'All previous features',
        'Advanced sewing toolkits & pattern-making courses',
        'Personalized video consultations (1 session per month)',
        'Early access to new tutorials and pattern designs',
        'Exclusive discounts on partner fabric and sewing tool shops',
        'Custom pattern requests (one per month)',
      ],
      buy: true,
    }

  ]

  const studentData = [
    {
      title: 'Basic',
      price: '$7.99/month',
      features: [
        'Access to 50 tutorial videos per month',
        'Basic sewing toolkits',
        'Email support',
      ],
      buy: true,
    },
    {
      title: 'Pro',
      price: '$14.99/month',
      features: [
        'Unlimited access to all tutorial videos',
        'Intermediate sewing toolkits',
        'Priority email support',
      ],
      buy: !true,
    }
  ]
  const organizationData = [
    {
      title: 'Basic',
      price: '$29.99/month',
      features: [
        'Access to 200 tutorial videos per month',
        'Team sewing toolkits',
        'Standard support',
      ],
      buy: true,
    },
    {
      title: 'Pro',
      price: '$49.99/month',
      features: [
        'Unlimited access to all tutorial videos',
        'Advanced team sewing toolkits',
        'Priority support',
      ],
      buy: !true,
    }
  ]
  const renderPlanContent = () => {
    switch (activeTab) {
      case 'individual':
        return (
          <>
            {
              individualData.map((item) => (
                <TabCard key={item.title} item={item} />
              ))
            }
          </>
        );
      case 'student':
        return (
          <>
            {
              studentData.map((item) => (
                <TabCard key={item.title} item={item} />
              ))
            }
          </>
        );
      case 'organization':
        return (
          <>
            {
              organizationData.map((item) => (
                <TabCard key={item.title} item={item} />
              ))
            }
          </>
        );
      default:
        return null;
    }
  };
  const paymentData = [
    {
      card: 'VISA Debit Card',
      cardType: 'VISA',
      cardNumber: '0000 0000 0000 0081',
      cardEmail: null,
      expireDate: 'Exp. 11/26',
      default: true,
      icon: Visa,
    },
    {
      card: 'MasterCard Credit Card',
      cardType: 'MasterCard',
      cardEmail: null,
      cardNumber: '0000 0000 0000 0026',
      expireDate: 'Exp. 05/25',
      default: false,
      icon: MasterCard,
    },
    {
      card: 'Paypal',
      cardType: 'Paypal',
      cardEmail: 'brucewayne@email.com',
      cardNumber: null,
      default: false,
      icon: PayPal,
    }
  ]

  const renderCardNumber = (cardNumber) => {
    if (!cardNumber) return null;
    const lastTwoDigits = cardNumber.slice(-2);
    return (
      <div className="flex items-center">
        <BsDot /><BsDot /><BsDot /><BsDot /> <span className='w-2'></span>
        <BsDot /><BsDot /><BsDot /><BsDot /> <span className='w-2'></span>
        <BsDot /><BsDot /><BsDot /><BsDot /> <span className='w-2'></span>
        <BsDot /><BsDot />{lastTwoDigits}
      </div>
    );
  };
  const CreditCardAddInput = [
    {
      label: 'CARD HOLDER NAME',
      placeholder: 'Card Holder Name',
      type: 'text',
    },
    {
      label: 'CARD NUMBER',
      placeholder: 'Card Number',
      type: 'text',
    },
    {
      label: 'EXPIRE DATE',
      placeholder: 'Exp. Date',
      type: 'text',
    }
  ]
  return (
    <div className="max-w-8xl mx-auto w-full px-[50px] py-12">
      <PageTitle title="Payment information" />

      <div className='pb-10'>
        <SectionTitle title='Subscription' />
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='flex flex-col gap-3 items-start mt-6 flex-1'>
              <div className='border border-primary-3 px-3 py-2 rounded w-fit font-unbounded font-semibold text-lg leading-5 text-primary-10'>
                Individual - Pro Plan
              </div>
              <div className='font-unbounded font-normal text-lg leading-5 tracking-[0.5px] text-primary-10'>
                $10/month
              </div>
            </div>

            <div className='mt-6 flex flex-col gap-2'>
              <p className='font-inter font-bold text-sm leading-[21px] text-secondary-6'>Next payment:</p>
              <div className='flex items-center gap-1'>
                <PiCalendarDotsLight className='text-black text-xl' />
                <p className='font-inter font-normal text-base leading-6 text-black'>September 19, 2024</p>
              </div>
            </div>
          </div>
          <Button onClick={toggleModal} variant='Secondary' size='Small' className='mt-4'>Change Plan</Button>
        </div>
      </div>

      <div>
        {/* <h2 className="text-xl font-semibold">Payment method</h2> */}
        <SectionTitle title='Payment Methods' />
        <div className='flex gap-4 items-stretch pt-5'>
          {
            paymentData.map((item) => (
              <div className={`max-w-[280px] w-full p-4 flex flex-col  rounded-lg flex-1 ${item.default ? 'border-[3px] border-primary-10' : 'border-[1px] border-secondary-4'}`}>
                <div className="flex justify-between items-center pb-3">
                  <span className='font-inter font-bold text-xs leading-[18px] text-secondary-6 flex-1'>{item.card}</span>
                  <img className='max-w-[28px] w-full h-[28px]' src={item.icon} alt="" />
                </div>
                {
                  item.cardEmail && (
                    <div className="font-inter font-normal text-sm leading-[21px] text-black">{item.cardEmail}</div>
                  )
                }
                {
                  item.cardNumber && (
                    <div className="font-inter font-normal text-sm leading-[21px] text-black">
                      {renderCardNumber(item.cardNumber)}
                    </div>
                  )
                }
                <div className="font-inter text-sm leading-[21px] text-black pt-2">{item.expireDate}</div>
                <div className='flex flex-col justify-end flex-1 '>
                  <div className="flex space-x-2  justify-end">
                    <Button
                      mode='button'
                      variant='Tertiary'
                      size='Small'
                      iconPosition='left'
                      icon={<LiaCheckCircle />
                      }
                      className="!gap-1 !px-0"


                    >
                      USE BY DEFAULT
                    </Button>
                    <Button
                      mode='button'
                      variant='Tertiary'
                      size='Small'
                      iconPosition='left'
                      icon={<RiDeleteBin6Line />}
                      className="!gap-1 !px-0"


                    >
                      DELETE
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }

        </div>

        <div className="flex space-x-4 mt-4">


          <Button
            onClick={togglePaymentTypeModal}
            variant='Secondary'
            size='Small'
            iconPosition='left'
            icon={<LuPlus />}
          >ADD NEW PAYMENT METHOD</Button>
          <Button onClick={() => setOneTimePaymentModal(true)} variant='Secondary' size='Small'>MAKE ONE TIME PAYMENT</Button>
        </div>
        <div className="mt-4">
          <button className="text-black font-inter font-normal text-xs leading-[18px] underline">Cancel Subscription</button>
        </div>
      </div>
      <Modal
        title="Change Plan"
        isOpen={isModalOpen}
        onCancel={toggleModal}
        // onSave={handleSave}
        showCancelButton={!true}
        showSaveButton={!true}
      >

        <div>
          <div className="flex space-x-4 mb-4 bg-secondary-1 rounded-xl p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-lg font-inter font-bold text-xs leading-[18px] uppercase ${activeTab === tab ? 'bg-primary-10 text-white' : ''}`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div>

          </div>
        </div>
        <div className="flex space-x-4">
          {renderPlanContent()}
        </div>
      </Modal>
      <Modal
        title="Add New Payment Method"
        isOpen={paymentTypeModal}
        onCancel={togglePaymentTypeModal}
        showCancelButton={!true}
        showSaveButton={!true}
      >

        <div>
             <div className="flex items-center mb-4">
              <label className="mr-4">
                <input
                  type="radio"
                  name="paymentType"
                  value="creditCard"
                  checked={paymentType === 'creditCard'}
                  onChange={() => setPaymentType('creditCard')}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentType"
                  value="paypal"
                  checked={paymentType === 'paypal'}
                  onChange={() => setPaymentType('paypal')}
                  className="mr-2"
                />
                PayPal
              </label>
              <div className="ml-auto">
                <span className="text-sm">WE ACCEPT:</span>
                <img src="path/to/cards.png" alt="Accepted Cards" className="inline-block ml-2" />
              </div>
            </div>
            {paymentType === 'creditCard' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">CARD HOLDER NAME</label>
                  <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="Bruce Waine" />
                </div>
                <div>
                  <label className="block text-sm font-medium">CARD NUMBER</label>
                  <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="1234 5678 9012 3456" />
                </div>
                <div>
                  <label className="block text-sm font-medium">EXPIRE DATE</label>
                  <div className="flex space-x-2">
                    <input type="text" className="mt-1 block w-1/2 border rounded-md p-2" placeholder="08" />
                    <input type="text" className="mt-1 block w-1/2 border rounded-md p-2" placeholder="24" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium">CVV</label>
                  <input type="password" className="mt-1 block w-full border rounded-md p-2" placeholder="•••" />
                </div>
              </div>
            )}
            <div className="flex justify-end mt-6">
              <button onClick={togglePaymentTypeModal} className="text-purple-700 border border-purple-700 px-4 py-2 rounded-md mr-4">
                CANCEL
              </button>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-md">
                ADD PAYMENT METHOD
              </button>
            </div>
          </div>
      </Modal>

      <Modal
        title="Make One Time Payment"
        isOpen={oneTimePaymentModal}
        onCancel={() => setOneTimePaymentModal(false)}
        showCancelButton={!true}
        showSaveButton={!true}
      >
        <div>
            <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded-md">
              <p>We do not store this card among your payment methods.</p>
              <p>If you plan to use it again, we recommend adding it to your payment methods.</p>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-sm">WE ACCEPT:</span>
              <img src="path/to/cards.png" alt="Accepted Cards" className="inline-block ml-2" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">CARD HOLDER NAME</label>
                <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="Bruce Waine" />
              </div>
              <div>
                <label className="block text-sm font-medium">CARD NUMBER</label>
                <input type="text" className="mt-1 block w-full border rounded-md p-2" placeholder="1234 5678 9012 3456" />
              </div>
              <div>
                <label className="block text-sm font-medium">EXPIRE DATE</label>
                <div className="flex space-x-2">
                  <input type="text" className="mt-1 block w-1/2 border rounded-md p-2" placeholder="08" />
                  <input type="text" className="mt-1 block w-1/2 border rounded-md p-2" placeholder="24" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">CVV</label>
                <input type="password" className="mt-1 block w-full border rounded-md p-2" placeholder="•••" />
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <button onClick={() => setOneTimePaymentModal(false)} className="text-purple-700 border border-purple-700 px-4 py-2 rounded-md mr-4">
                CANCEL
              </button>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-md">
                MAKE PAYMENT
              </button>
            </div>
        </div>
      </Modal>
    </div>
  );
};

export default PaymentInformation;