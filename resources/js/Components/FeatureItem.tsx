import { Feature } from '@/types';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import FeatureActionDropDown from './FeatureActionDropDown';
import FeatureUpvoteDownvote from './FeatureUpvoteDownvote';

export default function FeatureItem({ feature }: { feature: Feature }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="flex gap-8 p-6 text-gray-900 dark:text-gray-100">
        <FeatureUpvoteDownvote feature={feature} />
        <div className="flex-1">
          <h2 className="mb-2 text-2xl">
            <Link href={route('feature.show', feature)}> {feature.name}</Link>
          </h2>
          {(feature.description || '').length > 200 ? (
            <>
              <p>{isExpanded ? feature.description : `${(feature.description || '').slice(0, 200)}...`}</p>
              <button onClick={toggleReadMore} className="text-amber-500 hover:underline">
                {isExpanded ? 'Read Less' : 'Read More'}
              </button>
            </>
          ) : (
            <p>{feature.description}</p>
          )}
        </div>
        <div>
          <FeatureActionDropDown feature={feature} />
        </div>
      </div>
    </div>
  );
}
