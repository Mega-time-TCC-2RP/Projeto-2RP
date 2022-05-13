using Microsoft.Playwright;
using System;
using System.Threading.Tasks;
class AssistantProcess33
{
public  async Task Play()
{
using var playwright = await Playwright.CreateAsync();
await using var browser = await playwright.Webkit.LaunchAsync(new BrowserTypeLaunchOptions
{
    Headless = true,
    SlowMo = 2000
});
var context = await browser.NewContextAsync();

// Open new page
var page = await context.NewPageAsync(); 
await page.ScreenshotAsync(new PageScreenshotOptions { Path ="./StaticFiles/Images/Assistant33.png" });}}
