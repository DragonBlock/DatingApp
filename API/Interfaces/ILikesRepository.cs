using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.DTOs;
using API.Entities;
using API.Helpers;

namespace API.Interfaces
{
    public interface ILikesRepository
    {
        Task<UserLike> GetUserLike(int sourceUserID, int likedUserID);
        Task<AppUser> GetUserWithLikes(int userID);
        Task<PagedList<LikeDto>> GetUserLikes(LikesParams likesParams);
    }
}