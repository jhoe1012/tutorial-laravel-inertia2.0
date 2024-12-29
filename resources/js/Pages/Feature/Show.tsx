import CommentItem from '@/Components/CommentItem';
import FeatureUpvoteDownvote from '@/Components/FeatureUpvoteDownvote';
import NewCommentsForm from '@/Components/NewCommentsForm';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Feature } from '@/types';
import { Head } from '@inertiajs/react';

export default function Show({ feature }: { feature: Feature }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Features <b>{feature.name}</b>
        </h2>
      }
    >
      <Head title={'Features' + feature.name} />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="flex gap-8 p-6 text-gray-900 dark:text-gray-100">
              <FeatureUpvoteDownvote feature={feature} />
              <div className="flex-1">
                <h2 className="mb-2 text-2xl"> {feature.name} </h2>
                <p> {feature.description}</p>
                <div className="mt-8">
                  <NewCommentsForm feature={feature} />
                  {feature.comments.map((comment) => (
                    <CommentItem key={comment.id} comment={comment} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
