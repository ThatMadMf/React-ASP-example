﻿// <auto-generated />
using System;
using CompanyProjects.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CompanyProjects.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20200313094903_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2");

            modelBuilder.Entity("CompanyProjects.Models.Contribution", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.ToTable("Contributions");
                });

            modelBuilder.Entity("CompanyProjects.Models.Employee", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ProjectId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("ProjectId");

                    b.ToTable("Staff");
                });

            modelBuilder.Entity("CompanyProjects.Models.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Projects");
                });

            modelBuilder.Entity("CompanyProjects.Models.Contribution", b =>
                {
                    b.HasOne("CompanyProjects.Models.Project", null)
                        .WithMany("Contributions")
                        .HasForeignKey("ProjectId");
                });

            modelBuilder.Entity("CompanyProjects.Models.Employee", b =>
                {
                    b.HasOne("CompanyProjects.Models.Project", null)
                        .WithMany("Staff")
                        .HasForeignKey("ProjectId");
                });
#pragma warning restore 612, 618
        }
    }
}