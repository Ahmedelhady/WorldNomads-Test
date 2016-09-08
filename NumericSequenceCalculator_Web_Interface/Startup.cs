using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NumericSequenceCalculator_Web_Interface.Startup))]
namespace NumericSequenceCalculator_Web_Interface
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
