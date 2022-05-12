﻿using _2RPNET_API.Context;
using _2RPNET_API.Domains;
using _2RPNET_API.Interfaces;
using _2RPNET_API.ViewModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit;
using MimeKit;
using MailKit.Security;
using _2RPNET_API.ViewModels;

namespace _2RPNET_API.Repositories
{
    public class AssistantRepository : IAssistantRepository
    {
        private readonly RPAContext Ctx;
        public AssistantRepository(RPAContext appContext)
        {
            Ctx = appContext;
        }

        public void Create(Assistant NewAssistant)
        {
                NewAssistant.CreationDate = DateTime.Now;
                NewAssistant.AlterationDate = DateTime.Now;
                Ctx.Assistants.Add(NewAssistant);
                Ctx.SaveChanges();
        }

        public void Delete(int IdAssistant)
        {
            Assistant AssistantSought = SearchByID(IdAssistant);
            Ctx.Assistants.Remove(AssistantSought);
            Ctx.SaveChanges();
        }

        public async Task EnviaEmail(SendEmail emailConfig)
        {
            Random rand = new Random();
            int code = rand.Next(99999);

            Assistant assistantSought = SearchByID(emailConfig.idAssistant);
            //string userEmail = assistantSought.IdEmployeeNavigation.IdUserNavigation.Email;
            string userEmail = emailConfig.email;

            if (userEmail != null)
            {
                MimeMessage message = new MimeMessage();
                message.From.Add(new MailboxAddress("Grupo 2RP", "bots4rpa@gmail.com"));
                message.To.Add(MailboxAddress.Parse(userEmail));
                message.Subject = $"Email do retorno do assistente {assistantSought.AssistantName}";
                message.Body = new TextPart("plain")
                {
                    Text = @$"Codigo do email: {code},
O retorno do seu assistente {assistantSought.AssistantName} foi... {emailConfig.emailBody}"
                };

                SmtpClient client = new SmtpClient();

                
                    client.Connect("smtp.gmail.com", 587, SecureSocketOptions.StartTls);
                    client.Authenticate("bots4rpa@gmail.com", "Grupo8_manha");
                    await client.SendAsync(message);
                    client.Disconnect(true);
                    client.Dispose();

            }

        }

        public List<Assistant> ReadAll()
        {
            return Ctx.Assistants.ToList();
            //return Ctx.Assistants.Include(a => a.IdEmployeeNavigation).ToList();
        }

        public List<Assistant> ReadMyProcess(int IdUser)
        {
            return Ctx.Assistants
                .Where(a => a.IdAssistant == IdUser)
                 .ToList();
        }

        public Assistant SearchByID(int IdAssistant)
        {
            return Ctx.Assistants
                .FirstOrDefault(a => a.IdAssistant == IdAssistant);
        }

        public void Update(int IdAssistant, Assistant UpdatedAsssistant)
        {
            Assistant AssistantSought = SearchByID(IdAssistant);

            if (AssistantSought != null)
            {
                AssistantSought.AlterationDate = DateTime.Now;

                if (UpdatedAsssistant.IdEmployee > 0)
                {
                    AssistantSought.IdEmployee = UpdatedAsssistant.IdEmployee;
                }
                if (UpdatedAsssistant.AssistantName != null)
                {
                    AssistantSought.AssistantName = UpdatedAsssistant.AssistantName;
                }
                if (UpdatedAsssistant.AssistantDescription != null)
                {
                    AssistantSought.AssistantDescription = UpdatedAsssistant.AssistantDescription;
                }
                
                Ctx.Assistants.Update(AssistantSought);
                Ctx.SaveChanges();
            }
        }
    }
}
