using GiClubSite.Context;
using GiClubSite.Models;
using GiClubSite.Requests;
using GiClubSite.Responses;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GiClubSite.Services
{
    public class TaskService : ITaskService
    {
        public GiClubSiteContext Context { get; set; }
        public TaskService(GiClubSiteContext context)
        {
            Context = context;
        }

        // AddTask ---------------------------------------
        public async Task<int> AddCellTask(TaskReq taskReq)
        {
            int res = 0;
            using var transaction = Context.Database.BeginTransaction();
            try
            {
                Models.Task newTask = new Models.Task
                {
                    T_Title= taskReq.Title,
                    T_Description= taskReq.Description,
                    T_Notification = "info",
                    T_Status = "not completed",
                    T_Cell= taskReq.Cell,
                    T_CreatedAt = DateTime.Now
                };
                Context.Task.Add(newTask);
                res = await Context.SaveChangesAsync();
                if (res > 0)
                {
                    transaction.Commit();
                }
                return res;
            }
            catch
            {
                await transaction.RollbackAsync();
                return res;
            }
        }


        // GetCellTask ---------------------------------------
        public async Task<List<TaskResp>> GetCellTasks(GetCellTasksReq getCellTasksReq)
        {
            var cellTasks = await Context.Task
                .Where(t => t.T_Cell.Equals(getCellTasksReq.Cell) && t.T_Status.Equals(getCellTasksReq.Status))
                .Select(e => new TaskResp
                {
                    TaskId= e.TaskId,
                    Title = e.T_Title,
                    Description = e.T_Description,
                    Status = e.T_Status,
                    Notification = e.T_Notification,
                    Cell = e.T_Cell,
                    CreatedAt = e.T_CreatedAt,
                    Age = (DateTime.Now - e.T_CreatedAt).ToString(),
                    DeletedAt = e.T_DeletedAt
                })
                .ToListAsync();
            return cellTasks;
        }
    }
}
