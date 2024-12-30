<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthUserResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'email_verify_at' => $this->email_verify_at,
            'permissions' => $this->getAllPermissions()->map(fn($permission) => $permission->name),
            'roles' => $this->getRoleNames(),
        ];
    }
}
