import { can } from '@/helper';
import { Feature } from '@/types';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import PrimaryButton from './PrimaryButton';
import TextAreaInput from './TextAreaInput';

export default function NewCommentsForm({ feature }: { feature: Feature }) {
  const { data, setData, post, processing } = useForm({
    comment: '',
  });
  const user = usePage().props.auth.user;
  const createComment: FormEventHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    post(route('comment.store', feature.id), {
      preserveScroll: true,
      preserveState: true,
      onSuccess: () => {
        setData('comment', '');
      },
    });
  };
  if (!can(user, 'manage_comments')) {
    return <div className="text-center text-gray-600">You are not allowed to comment</div>;
  }

  return (
    <form onSubmit={createComment} className="mb-4 flex items-center rounded-lg bg-gray-50 py-2 dark:bg-gray-800">
      <TextAreaInput
        rows={1}
        value={data.comment}
        onChange={(e) => setData('comment', e.target.value)}
        placeholder="Your Comment"
        className="mt-1 block w-full"
      ></TextAreaInput>

      <PrimaryButton disabled={processing}>Comment</PrimaryButton>
    </form>
  );
}
