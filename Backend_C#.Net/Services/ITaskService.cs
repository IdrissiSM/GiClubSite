using GiClubSite.Models;
using GiClubSite.Requests;
using GiClubSite.Responses;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace GiClubSite.Services
{
    public interface ITaskService
    {
        Task<int> AddCellTask(TaskReq taskReq);
        Task<List<TaskResp>> GetCellTasks(GetCellTasksReq getCellTasksReq);
    }
}