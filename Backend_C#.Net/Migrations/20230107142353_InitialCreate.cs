using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace GiClubSite.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ContactMail",
                columns: table => new
                {
                    ContactMailId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CM_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CM_Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CM_University = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CM_Phone = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CM_Message = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CM_SendTime = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContactMail", x => x.ContactMailId);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    E_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    E_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    E_Details = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    E_Date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    E_Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    E_CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    E_DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventId);
                });

            migrationBuilder.CreateTable(
                name: "Member",
                columns: table => new
                {
                    MemberId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    M_FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_Password = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_Level = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_Cellule = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_Role = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    M_CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    M_DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Member", x => x.MemberId);
                });

            migrationBuilder.CreateTable(
                name: "Task",
                columns: table => new
                {
                    TaskId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    T_Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    T_Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    T_Status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    T_Notification = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    T_Cell = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    T_CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: true),
                    T_DeletedAt = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Task", x => x.TaskId);
                });

            migrationBuilder.CreateTable(
                name: "EventFile",
                columns: table => new
                {
                    EventFileId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    EF_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EventId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventFile", x => x.EventFileId);
                    table.ForeignKey(
                        name: "FK_EventFile_Event_EventId",
                        column: x => x.EventId,
                        principalTable: "Event",
                        principalColumn: "EventId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventFile_EventId",
                table: "EventFile",
                column: "EventId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ContactMail");

            migrationBuilder.DropTable(
                name: "EventFile");

            migrationBuilder.DropTable(
                name: "Member");

            migrationBuilder.DropTable(
                name: "Task");

            migrationBuilder.DropTable(
                name: "Event");
        }
    }
}
