<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CommentsResource extends JsonResource
{

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        parent::wrap(null);
        return [
            'id' => $this->id,
            'comment' => $this->comment,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
            'user' => new UserResource($this->user),
        ];
    }
}
