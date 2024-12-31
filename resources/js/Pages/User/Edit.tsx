import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import Radio from '@/Components/Radio';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { User } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Edit({ user, roles, roleLabels }: { user: User; roles: any[]; roleLabels: Record<string, string> }) {
  console.log(user);
  const { data, setData, processing, errors, put } = useForm({
    name: user.name,
    email: user.email,
    roles: user.roles,
  });

  const updateUser: FormEventHandler = (e) => {
    e.preventDefault();
    put(route('user.update', user.id), {
      preserveScroll: true,
    });
  };

  const onRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setData('roles', [value]);
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Update User <b>"{user.name}"</b>
        </h2>
      }
    >
      <Head title={`Update User ${user.name}`} />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-4 overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="flex gap-8 p-6 text-gray-900 dark:text-gray-100">
              <form onSubmit={updateUser} className="w-full">
                <div className="mb-9">
                  <InputLabel htmlFor="name" value="Name" />

                  <TextInput id="name" className="mt-1 block w-full" value={data.name} disabled />

                  <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="mb-9">
                  <InputLabel htmlFor="name" value="Name" />

                  <TextInput id="email" className="mt-1 block w-full" value={data.email} disabled />

                  <InputError className="mt-2" message={errors.name} />
                </div>
                <div className="mb-8">
                  <InputLabel value="Role" />

                  {roles.map((role: any) => (
                    <div className="block" key={role.id}>
                      <label className="flex items-center">
                        <Radio name="roles" checked={data.roles.includes(role.name)} value={role.name} onChange={onRoleChange} />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">{roleLabels[role.name]}</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
