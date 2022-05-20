using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VLU_CV.Migrations
{
    public partial class vlucv : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CurriculumVitaes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FullName = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    Position = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PersonalStatement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    BirthDay = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: false),
                    FacebookUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Skill_1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SkillDecription_1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Skill_2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SkillDecription_2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Specialized = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SchoolName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    GPA = table.Column<double>(type: "float", nullable: false),
                    Positioned_1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Worked_1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description_1 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Positioned_2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Worked_2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Description_2 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Achievement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImageSrc = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CurriculumVitaes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CurriculumVitaes");
        }
    }
}
