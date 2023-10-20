using GiClubSite.Requests;
using GiClubSite.Responses;
using GiClubSite.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GiClubSite.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        public ITaskService TaskService { get; set; }
        public TaskController(ITaskService taskService)
        {
            TaskService = taskService;
        }

        // AddTask Controller
        [HttpPost("AddCellTask")]
        public async Task<ActionResult<int>> AddCellTask([FromBody] TaskReq taskRequest)
        {
            int result = await TaskService.AddCellTask(taskRequest);

            if (result != 0)
            {
                return Ok();
            }
            return BadRequest();
        }

        // AddTask Controller
        [HttpPost("GetCellTasks")]
        public async Task<List<TaskResp>> GetCellTasks([FromBody] GetCellTasksReq getCellTasksReq)
        {
            return await TaskService.GetCellTasks(getCellTasksReq);
        }
    }
}
