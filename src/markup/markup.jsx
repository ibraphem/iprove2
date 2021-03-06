import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';
import PageScrollTop from './elements/page-scroll-top';

// All Pages Router
import Index from './pages/index';
import AboutUs from './pages/about-us';
import Team from './pages/team';
import Services from './pages/services';
import ServiceDetail from './pages/service-detail';
import Welcome from './pages/api_documentation/components/welcome/Welcome';
import GettingStarted from './pages/api_documentation/components/getting-started/GettingStarted';
import AboutVerify from './pages/api_documentation/components/about-verify/AboutVerify';
import Introduction from './pages/api_documentation/components/introduction/Introduction';
import Authentication from './pages/api_documentation/components/authentication/Authentication';
import Bvn from './pages/api_documentation/components/bvn/Bvn';
import Tin from './pages/api_documentation/components/tin/Tin';
import Cac from './pages/api_documentation/components/cac/Cac';
import DriverLicence from './pages/api_documentation/components/driver-licence/DriverLicence';
import IdentityBiometric from './pages/api_documentation/components/identity-biometric/IdentityBiometric';
import IdentityMatching from './pages/api_documentation/components/identity-matching/IdentityMatching';
//import Bvn from './pages/api_documentation/components/bvn/Bvn';

import FormLogin from './pages/form-login';
import FormRegister from './pages/form-register';
import FormForgetPassword from './pages/form-forget-password';
import Faq from './pages/faq';
import ContactUs from './pages/contact-us';
import Booking from './pages/booking';
import BlogGrid from './pages/blog-grid';
import BlogDetails from './pages/blog-details';
import Error from './pages/error-404';
import Header from './layout/header';
import Footer from './layout/footer';

class Markup extends Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Header />
					<Switch>

						<Route path='/' exact component={Index} />
						<Route path='/about-us' exact component={AboutUs} />
						<Route path='/team' exact component={Team} />
						<Route path='/services' exact component={Services} />
						<Route path='/api/welcome' exact component={Welcome} />
						<Route path='/api/getting-started' exact component={GettingStarted} />
						<Route path='/api/introduction' exact component={Introduction} />
						<Route path='/api/authentication' exact component={Authentication} />
						<Route path='/api/about-verification' exact component={AboutVerify} />
						<Route path='/api/bvn' exact component={Bvn} />
						<Route path='/api/tin' exact component={Tin} />
						<Route path='/api/cac' exact component={Cac} />
						<Route path='/api/driver-licence' exact component={DriverLicence} />
						<Route path='/api/identity-biometric' exact component={IdentityBiometric} />
						<Route path='/api/identity-matching' exact component={IdentityMatching} />
						<Route path='/service-detail' exact component={ServiceDetail} />
						<Route path='/form-login' exact component={FormLogin} />
						<Route path='/form-register' exact component={FormRegister} />
						<Route path='/form-forget-password' exact component={FormForgetPassword} />
						<Route path='/faq' exact component={Faq} />
						<Route path='/contact-us' exact component={ContactUs} />
						<Route path='/booking' exact component={Booking} />
						<Route path='/blog-grid' exact component={BlogGrid} />
						<Route path='/blog-details' exact component={BlogDetails} />
						<Route component={Error} />

					</Switch>

					<PageScrollTop />
					<Footer />
				</BrowserRouter>

				<BackToTop />

			</>
		);
	}
}

export default Markup;