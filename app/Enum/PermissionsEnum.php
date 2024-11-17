<?php

namespace App\Enum;

enum PermissionsEnum: string
{
    case ManageFeatures = "manage_features";
    case ManageUser = "manage_users";
    case ManageComments = "manage_comments";
    case UpvoteDownvote = "upvote_downvote";
}
