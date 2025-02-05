"use client"
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch, FaUserPlus, FaUserMinus, FaLock, FaUnlock } from 'react-icons/fa';


import userImg from '@/assets/userImg.png';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { MdLockOpen, MdLockOutline, MdOutlineFileUpload } from 'react-icons/md';
import { LiaCheckCircle } from "react-icons/lia";

import { FiDownload } from 'react-icons/fi';


import Image from 'next/image';
import ImageUploader from '@/components/ui/ImageUploader/ImageUploader';
import Button from '@/components/ui/Button';
import InputText from '@/components/ui/Input/InputText';
import Table from '@/components/ui/Table/Table';

// Demo user data
const demoUsers = [
  { dateAdded: 'September 11, 2024', firstName: 'Bruce', lastName: 'Wayne', email: 'bruce.wayne@batman.com', type: 'Student', status: 'Active' },
  { dateAdded: 'September 10, 2024', firstName: 'Clark', lastName: 'Kent', email: 'clark.kent@superman.com', type: 'Student', status: 'Active' },
  { dateAdded: 'September 7, 2024', firstName: 'Diana', lastName: 'Prince', email: 'diana.prince@wonderwoman.com', type: 'Student', status: 'Active' },
  { dateAdded: 'September 17, 2024', firstName: 'Barry', lastName: 'Allen', email: 'barry.allen@flash.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'September 16, 2024', firstName: 'Hal', lastName: 'Jordan', email: 'hal.jordan@greenlantern.com', type: 'Student', status: 'Active' },
  { dateAdded: 'September 16, 2024', firstName: 'Arthur', lastName: 'Curry', email: 'arthur.curry@aquaman.com', type: 'Teacher', status: 'Locked' },
  { dateAdded: 'September 5, 2024', firstName: 'Victor', lastName: 'Stone', email: 'victor.stone@cyborg.com', type: 'Student', status: 'Active' },
  { dateAdded: 'August 21, 2024', firstName: 'Selina', lastName: 'Kyle', email: 'selina.kyle@catwoman.com', type: 'Student', status: 'Locked' },
  { dateAdded: 'August 13, 2024', firstName: 'Harley', lastName: 'Quinn', email: 'harley.quinn@harley.com', type: 'Student', status: 'Locked' },
  { dateAdded: 'August 4, 2024', firstName: 'Oliver', lastName: 'Queen', email: 'oliver.queen@greenarrow.com', type: 'Student', status: 'Active' },
  { dateAdded: 'July 30, 2024', firstName: 'Lex', lastName: 'Luthor', email: 'lex.luthor@luthorcorp.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'July 25, 2024', firstName: 'Lois', lastName: 'Lane', email: 'lois.lane@dailyplanet.com', type: 'Student', status: 'Active' },
  { dateAdded: 'July 20, 2024', firstName: 'Jimmy', lastName: 'Olsen', email: 'jimmy.olsen@dailyplanet.com', type: 'Student', status: 'Active' },
  { dateAdded: 'July 15, 2024', firstName: 'Alfred', lastName: 'Pennyworth', email: 'alfred.pennyworth@wayne.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'July 10, 2024', firstName: 'Lucius', lastName: 'Fox', email: 'lucius.fox@wayne.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'July 5, 2024', firstName: 'Barbara', lastName: 'Gordon', email: 'barbara.gordon@batgirl.com', type: 'Student', status: 'Active' },
  { dateAdded: 'June 30, 2024', firstName: 'Dick', lastName: 'Grayson', email: 'dick.grayson@nightwing.com', type: 'Student', status: 'Active' },
  { dateAdded: 'June 25, 2024', firstName: 'Jason', lastName: 'Todd', email: 'jason.todd@redhood.com', type: 'Student', status: 'Locked' },
  { dateAdded: 'June 20, 2024', firstName: 'Tim', lastName: 'Drake', email: 'tim.drake@robin.com', type: 'Student', status: 'Active' },
  { dateAdded: 'June 15, 2024', firstName: 'Stephanie', lastName: 'Brown', email: 'stephanie.brown@spoiler.com', type: 'Student', status: 'Active' },
  { dateAdded: 'June 10, 2024', firstName: 'Cassandra', lastName: 'Cain', email: 'cassandra.cain@batgirl.com', type: 'Student', status: 'Active' },
  { dateAdded: 'June 5, 2024', firstName: 'Kate', lastName: 'Kane', email: 'kate.kane@batwoman.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'May 30, 2024', firstName: 'Renee', lastName: 'Montoya', email: 'renee.montoya@gcpd.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'May 25, 2024', firstName: 'Harvey', lastName: 'Bullock', email: 'harvey.bullock@gcpd.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'May 20, 2024', firstName: 'Jim', lastName: 'Gordon', email: 'jim.gordon@gcpd.com', type: 'Teacher', status: 'Active' },
  { dateAdded: 'May 15, 2024', firstName: 'Selina', lastName: 'Kyle', email: 'selina.kyle@catwoman.com', type: 'Student', status: 'Active' },
  { dateAdded: 'May 10, 2024', firstName: 'Pamela', lastName: 'Isley', email: 'pamela.isley@ivy.com', type: 'Student', status: 'Locked' },
  { dateAdded: 'May 5, 2024', firstName: 'Edward', lastName: 'Nygma', email: 'edward.nygma@riddler.com', type: 'Student', status: 'Active' },
  { dateAdded: 'April 30, 2024', firstName: 'Oswald', lastName: 'Cobblepot', email: 'oswald.cobblepot@penguin.com', type: 'Student', status: 'Active' },
  { dateAdded: 'April 25, 2024', firstName: 'Jonathan', lastName: 'Crane', email: 'jonathan.crane@scarecrow.com', type: 'Student', status: 'Locked' },
];

const Input = ({ placeholder, register, name, label }) => {
  return (
    <div className='max-w-[337px] w-full mb-4'>
      <div className='text-xs font-bold leading-[150%] text-black uppercase pb-1'>{label}</div>
      <input
        className='max-w-[337px] outline-none w-full h-10 bg-white border border-bw-3 rounded-lg px-2 py-[6px] font-inter text-sm font-normal leading-[150%]'
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

const AdminConsole = () => {
  const { register, handleSubmit } = useForm();
  const [logoPreview, setLogoPreview] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const usersPerPage = 5;
  const [logo, setLogo] = useState(null);

  const [thumbnailImage, setThumbnailImage] = useState(null);
  useEffect(() => {
    setLogo(userImg);
    setThumbnailImage(userImg);
    // setProfileImage('https://s3-alpha-sig.figma.com/img/701e/d97f/be82358888322c19aeba2b96c83fdaa8?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jzj-pfyRAz~fhIIl2wnSGbSeVHha7nOPTjlHAmck900K0PtoaQb5mDYU5KfgImElI6B5~e3KBP2HGAyjkJffdDHFbxuX2LumQ6cJWSEr0t1AZluQi7NPp56Mii57UsePSGwzB924NbFHAMU13p3ERbc2hhv7r3gysmXu5Lfisx-i2VSCImg2C0q8SgcqemXFw-TKx1elqlaaEYJInZkYwV-xWZl1I8oBGfImKrnoGOHI6mojhh~W9IvXMDd9tdZffXwO7v8aFZgJ-9jAHtiO3taj3-mj~-6riOaWiTjBe7DNNH4CPy8BU-drIfzGEYUwYRbHn84iY5wrFM4Z-N3nAw__');
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleImageChange = (e, setPreview) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Filter users based on search term
  const filteredUsers = demoUsers.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map(user => user.email));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (email) => {
    if (selectedUsers.includes(email)) {
      setSelectedUsers(selectedUsers.filter(userEmail => userEmail !== email));
    } else {
      setSelectedUsers([...selectedUsers, email]);
    }
  };
  const contactInput =
    [
      {
        label: 'Contact Name',
        placeholder: 'Full Name',
        name: 'contactName',
      },
      {
        label: 'Contact Email',
        placeholder: 'https://school.url',
        name: 'contactEmail',
      },
      {
        label: 'Support Contact Name',
        placeholder: 'Full Name',
        name: 'supportContactName',
      },
      {
        label: 'Support Contact Email',
        placeholder: 'https://school.url',
        name: 'supportContactEmail',
      },
      {
        label: 'Footer Data',
        placeholder: 'Usually uses for copyright or additional info',
        name: 'footerData',
      },
    ]
  const columns = [

    { key: 'dateAdded', label: 'DATE ADDED' },
    { key: 'firstName', label: 'FIRST NAME	' },
    { key: 'lastName', label: 'LAST NAME	' },
    { key: 'email', label: 'EMAIL	' },
    { key: 'type', label: 'TYPE	' },

    {
      key: 'status',
      label: 'STATUS',
      width: '200px',
      render: (row) => (
        <div className='flex items-center gap-2'>
          <div className={`w-2 h-2 rounded-full ${row.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          {row.status}
        </div>
      ),
    },
  ];

  const handleRowSelect = (selectedRows) => {
    setSelectedUsers(selectedRows.map(user => user.email));
    console.log('Selected Rows:', selectedRows);
  };
  const showCustomButtonGroupTable = <>
    <div className='flex items-center gap-3 mb-4'>
      <Button
        variant='Secondary'
        size='Small'
        iconPosition='left'
        icon={<FaUserPlus />}
        className='!gap-1 !px-4'
      >
        Add user
      </Button>
      <Button
        variant='Secondary'
        size='Small'
        iconPosition='left'
        icon={<RiDeleteBin6Line />}
        className='!gap-1 !px-4'
      >
        Remove User
      </Button>
      <Button
        variant='Secondary'
        size='Small'
        iconPosition='left'
        icon={<MdLockOpen   />}
        className='!gap-1 !px-4'
      >
        Unlock user
      </Button>
      <Button
        variant='Secondary'
        size='Small'
        iconPosition='left'
        icon={<MdLockOutline />}
        className='!gap-1 !px-4'
      >
        lock user
      </Button>
    </div>
  </>
  return (
    <div className='max-w-8xl mx-auto w-full px-[50px] py-12'>
      <div className='font-unbounded text-6.5xl font-normal leading-[68px] text-black tracking-[0.5px]'>Admin console</div>
      <form onSubmit={handleSubmit(onSubmit)} className='pt-10 max-w-[922px] w-full'>
        <h2 className='font-unbounded text-lg pb-5 font-normal leading-5 text-secondary-8 tracking-[0.5px]'>Domain & Access Settings</h2>

        <div className='flex gap-5 items-center'>
          <div className='flex-1'>
            <InputText label="School Proxy URL" placeholder="https://proxy.url" register={register} name="schoolProxyUrl" />
          </div>
          <div className='flex-1'>
            <InputText label="School custom URL" placeholder="https://proxy.url" register={register} name="schoolCustomUrl" />
          </div>
        </div>
        <div>
          <h2 className='font-unbounded text-lg pb-5 font-normal leading-5 text-secondary-8 tracking-[0.5px]'>Branding Settings</h2>
          <div className='flex gap-4'>
            <div className='flex-1 flex justify-start'>
              <ImageUploader
                label="Logo"
                defaultImage={userImg}
                onImageChange={setLogo}
              />
            </div>
            <div className='flex-1 flex justify-start'>
              <ImageUploader
                label="Thumbnail"
                defaultImage={userImg}
                onImageChange={setThumbnailImage}
              />
            </div>
          </div>
        </div>


        <div className='flex gap-x-4 flex-wrap mt-5'>
          {
            contactInput.map((input, index) => (
              <div className='w-[calc(50%-10px)]'>
                <InputText
                  key={index}
                  label={input.label}
                  placeholder={input.placeholder}
                  register={register}
                  name={input.name} />
              </div>
            ))
          }
        </div>

      </form>

      <div className='pt-12'>
        <h4 className='font-unbounded text-lg pb-5 font-normal leading-5 text-secondary-8 tracking-[0.5px]'>User management</h4>

        <Table
          data={demoUsers}
          columns={columns}
          rowsPerPageOptions={[5, 10, 15]}
          defaultRowsPerPage={10}
          selectionType='all'
          onRowSelect={handleRowSelect}
          onSort={(sortedData) => console.log('Sorted Data:', sortedData)}
          paginationPosition="both"
          showShort={false}
          showRowsPerPageLabel={false}
          sortByLabel="Sort by:"
          rowsPerPageLabel="Rows per page:"
          showSearch={true}
          searchPosition="top"
          customButtonGroup={showCustomButtonGroupTable}
          showCustomButtonGroup={true}

        />


      </div>
    </div>
  );
};

export default AdminConsole;