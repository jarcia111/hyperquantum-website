import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Eye, 
  Activity, 
  Monitor, 
  Smartphone, 
  Globe, 
  TrendingUp,
  Calendar,
  MousePointer,
  RefreshCw
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

interface AnalyticsSummary {
  totalVisits: number;
  uniqueVisitors: number;
  totalEvents: number;
  pageViews: Record<string, number>;
  deviceBreakdown: Record<string, number>;
  browserBreakdown: Record<string, number>;
  osBreakdown: Record<string, number>;
  referrerBreakdown: Record<string, number>;
  dailyVisits: Record<string, number>;
  eventBreakdown: Record<string, number>;
  recentVisits: any[];
}

export default function AnalyticsDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<AnalyticsSummary | null>(null);
  const [timeRange, setTimeRange] = useState(7);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/analytics/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('analytics_token', result.token);
        setIsAuthenticated(true);
        fetchAnalytics(timeRange);
      } else {
        setError('Contraseña incorrecta');
      }
    } catch (err) {
      setError('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalytics = async (days: number) => {
    const token = localStorage.getItem('analytics_token');
    
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const response = await fetch(`/api/analytics/summary?days=${days}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('analytics_token');
        setIsAuthenticated(false);
        return;
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      console.error('Error fetching analytics:', err);
    }
  };

  const logout = () => {
    localStorage.removeItem('analytics_token');
    setIsAuthenticated(false);
    setPassword('');
  };

  useEffect(() => {
    const token = localStorage.getItem('analytics_token');
    if (token) {
      setIsAuthenticated(true);
      fetchAnalytics(timeRange);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchAnalytics(timeRange);
    }
  }, [timeRange, isAuthenticated]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoRefresh && isAuthenticated) {
      interval = setInterval(() => {
        fetchAnalytics(timeRange);
      }, 30000); // Refresh every 30 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, isAuthenticated, timeRange]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Ingresa tu contraseña para acceder</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={login} className="space-y-4">
              <Input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Iniciando sesión...' : 'Ingresar'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Activity className="h-12 w-12 animate-spin mx-auto mb-4" />
          <p>Cargando datos...</p>
        </div>
      </div>
    );
  }

  const dailyVisitsData = Object.entries(data.dailyVisits).map(([date, visits]) => ({
    date: new Date(date).toLocaleDateString('es-ES', { month: 'short', day: 'numeric' }),
    visits,
  }));

  const pageViewsData = Object.entries(data.pageViews).map(([page, views]) => ({
    name: page,
    value: views,
  }));

  const deviceData = Object.entries(data.deviceBreakdown).map(([device, count]) => ({
    name: device,
    value: count,
  }));

  const browserData = Object.entries(data.browserBreakdown).map(([browser, count]) => ({
    name: browser,
    value: count,
  }));

  const referrerData = Object.entries(data.referrerBreakdown)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([referrer, count]) => ({
      name: referrer,
      value: count,
    }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-gray-300">HyperQuantum - Métricas en tiempo real</p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setAutoRefresh(!autoRefresh)}
              className={autoRefresh ? 'bg-green-500 text-white' : ''}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${autoRefresh ? 'animate-spin' : ''}`} />
              {autoRefresh ? 'Auto-refresh ON' : 'Auto-refresh OFF'}
            </Button>
            <Button variant="outline" onClick={logout}>
              Cerrar sesión
            </Button>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="mb-6 flex gap-2">
          {[1, 7, 30, 90].map((days) => (
            <Button
              key={days}
              variant={timeRange === days ? 'default' : 'outline'}
              onClick={() => setTimeRange(days)}
            >
              {days === 1 ? 'Hoy' : `${days} días`}
            </Button>
          ))}
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Visitas</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalVisits}</div>
              <p className="text-xs text-muted-foreground">
                Últimos {timeRange} días
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Visitantes Únicos</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.uniqueVisitors}</div>
              <p className="text-xs text-muted-foreground">
                Sesiones únicas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Eventos Totales</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{data.totalEvents}</div>
              <p className="text-xs text-muted-foreground">
                Interacciones registradas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Promedio Diario</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {Math.round(data.totalVisits / timeRange)}
              </div>
              <p className="text-xs text-muted-foreground">
                Visitas por día
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-slate-800">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="traffic">Tráfico</TabsTrigger>
            <TabsTrigger value="devices">Dispositivos</TabsTrigger>
            <TabsTrigger value="events">Eventos</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Daily Visits Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Visitas Diarias</CardTitle>
                <CardDescription>Tendencia de visitas en el período seleccionado</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dailyVisitsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="visits" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Page Views */}
            <Card>
              <CardHeader>
                <CardTitle>Páginas Más Visitadas</CardTitle>
                <CardDescription>Distribución de vistas por página</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pageViewsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="traffic" className="space-y-6">
            {/* Referrers */}
            <Card>
              <CardHeader>
                <CardTitle>Fuentes de Tráfico</CardTitle>
                <CardDescription>De dónde vienen tus visitantes</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={referrerData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={150} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#00C49F" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="devices" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Device Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos</CardTitle>
                  <CardDescription>Mobile vs Desktop</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={deviceData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {deviceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Browser Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Navegadores</CardTitle>
                  <CardDescription>Distribución por navegador</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={browserData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {browserData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Eventos Registrados</CardTitle>
                <CardDescription>Interacciones de los usuarios</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(data.eventBreakdown).map(([event, count]) => (
                    <div key={event} className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">{event}</span>
                      <span className="text-muted-foreground">{count} veces</span>
                    </div>
                  ))}
                  {Object.keys(data.eventBreakdown).length === 0 && (
                    <p className="text-muted-foreground text-center py-8">
                      No hay eventos registrados aún
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recent Visits */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Visitas Recientes</CardTitle>
            <CardDescription>Últimas 10 visitas registradas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {data.recentVisits.slice(0, 10).map((visit, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b text-sm">
                  <div className="flex-1">
                    <span className="font-medium">{visit.path}</span>
                    <span className="text-muted-foreground ml-2">
                      {new Date(visit.timestamp).toLocaleString('es-ES')}
                    </span>
                  </div>
                  <div className="flex gap-4 text-muted-foreground">
                    <span>{visit.device}</span>
                    <span>{visit.browser}</span>
                    <span>{visit.os}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
