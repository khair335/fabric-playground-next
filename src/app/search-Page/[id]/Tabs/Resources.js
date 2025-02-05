import React from 'react';

const Resources = () => {
  const items = [
    { item: 'Sewing Machine Singer', source: 'Amazon', link: '#', price: '$302.86' },
    { item: 'Brown Seam Ripper', source: 'RW Realm', link: '#', price: '$1.05' },
    { item: 'Candora Sewing Thread', source: 'Amazon', link: '#', price: '$10.22' },
    { item: 'Gutermann Sew-All Thread', source: 'Amazon', link: '#', price: '$8.02' },
    { item: 'Cross Stitch Needles', source: 'CC-Craft', link: '#', price: '$6.30' },
    { item: 'Home Sewing Machine Needles 80/12', source: 'Amazon', link: '#', price: '$5.52' },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b-2 border-gray-200 text-left">ITEM</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 text-left">SOURCE</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 text-left">LINK</th>
            <th className="py-2 px-4 border-b-2 border-gray-200 text-left">~ PRICE</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b border-gray-200">{item.item}</td>
              <td className="py-2 px-4 border-b border-gray-200">{item.source}</td>
              <td className="py-2 px-4 border-b border-gray-200">
                <a href={item.link} className="text-purple-600">&#128279;</a>
              </td>
              <td className="py-2 px-4 border-b border-gray-200">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resources;