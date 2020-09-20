using Microsoft.EntityFrameworkCore.Migrations;

namespace CompanyProjects.Migrations
{
    public partial class Renamefield : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SecondName",
                table: "Employees",
                newName: "LastName");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Employees",
                newName: "SecondName");
        }
    }
}
